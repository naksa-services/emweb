import React from 'react'
import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react';
import { getVendorExperience, UpsertVendorExperience } from '../api';
import DataTable from 'react-data-table-component';
import { Button, Modal } from 'react-bootstrap';

import { set } from 'react-hook-form';
import AlertMessage from './constants/messagealert';
import LoadingIndicator from './External/LoadingIndicator';
import { useLocation } from "react-router-dom"
function VendorExperience() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const [user, setUser] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setloading] = useState(false);
  const [errmessage, seterrmessage] = useState('');
  const [errmessagetype, seterrmessagetype] = useState('')
  const [alert, setalert] = useState(false);

  // Form posting 
  const [state, setState] = useState({
    companyname: "",
    startdate: "",
    enddate: "",
    workreference: ""
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      companyname: state.companyname,
      startdate: state.startdate,
      enddate: state.enddate,
      workreference: state.workreference,
      vid: '9'
    }
    UpsertVendorExperience(data).then((res) => {
      if (res.status === true && res) {
        setShow(false);
        setalert(true);
        seterrmessagetype('success');
        seterrmessage(`${res.data} Successfully`)
        getPersonalData();

      }
      else if (res.status === false && res) {
        setShow(false);
        setalert(true);
        seterrmessagetype('failure');
        seterrmessage(`Something went wrong, Please tray again..`)
        getPersonalData();
      }
    })
  };

  const getPersonalData = () => {
    const id = params.get("id");
    // debugger;
    getVendorExperience(id).then(res => {
      if (res && res.data) {
        console.log(res.data);

        setUser(res.data);
        setloading(true);
      }
    })
  }

  useEffect(() => {
    getPersonalData();
  }, [])
  const column = [
    {
      name: "Company Name",
      selector: (row) => row.companyname,
      sortable: true
    },
    {
      name: "Start Date",
      selector: (row) => row.startdate,
      sortable: true
    },
    {
      name: "End Date",
      selector: (row) => row.enddate,
      sortable: true
    },
    {
      name: "Work Reference",
      selector: (row) => row.workreference,
      sortable: true
    },
  ]
  const editDataform = () => {
    setShow(true);
    state.companyname = user[0].companyname;
    state.startdate = user[0].startdate;
    state.enddate = user[0].enddate;
    state.workreference = user[0].workreference;
  }

  return (
    <div>
      <div>
        <div className="content-body">
          <div className='container-fluid'>
            <AlertMessage
              show={alert}
              onhide={() => setalert(false)}
              data={errmessagetype}
              message={errmessage}
            />
          </div>


          {loading === true ?
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Experience Details</h4>
                      <Button variant='success' onClick={() => editDataform()} className='allBtn'>Edit</Button>
                      <Modal show={show} onHide={() => setShow(false)}>
                        <Modal.Header closeButton>
                          <Modal.Title>Modify Your Expireance Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <form>
                            <div className="mb-3">
                              <label>Company Name</label>
                              <input type="text" className="form-control input-default " name='companyname' value={state.companyname} onChange={handleInputChange} placeholder="Enter Company name" />
                            </div>


                            <div className="mb-3">
                              <label>Start date</label>
                              <input type="date" className="form-control input-default " name='startdate' value={state.startdate} onChange={handleInputChange} placeholder="Enter Start Date" />
                            </div>
                            <div className="mb-3">
                              <label>End date</label>
                              <input type="date" className="form-control input-default " name='enddate' value={state.enddate} onChange={handleInputChange} placeholder="Enter End Date" />
                            </div>
                            <div className="mb-3">
                              <label>Work Reference</label>
                              <input type="text" className="form-control input-default " name='workreference' value={state.workreference} onChange={handleInputChange} placeholder="Enter Work Reference" />
                            </div>

                          </form>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={() => setShow(false)}>
                            Close
                          </Button>
                          <Button variant="primary" onClick={handleSubmit} style={{background:'#e3e730' ,border:'none'}}>
                            Save Changes
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                    <div className="card-body">
                      <DataTable columns={column}
                        data={user}
                        pagination
                        fixedHeader
                        fixedHeaderScrollHeight='500px'
                        highlightOnHover
                      //   subHeader
                      //   subHeaderComponent={
                      //     <input type="text" placeholder='Search Here' className='w-25 form-control' value={search} onChange={(e) => setSearch(e.target.value)}/>
                      //   }
                      />

                    </div>

                  </div>
                </div>
              </div>

            </div>
            : <div><LoadingIndicator /></div>
          }
        </div>

      </div>


    </div >

  )
}

export default VendorExperience;