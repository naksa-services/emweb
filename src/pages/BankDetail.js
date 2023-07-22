import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useState, useEffect } from 'react';
import { getBankDetail, UpsertBankDetails } from '../api';
import DataTable from 'react-data-table-component';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { set } from 'react-hook-form';
import AlertMessage from './constants/messagealert';
import reactSelect from 'react-select';
import LoadingIndicator from './External/LoadingIndicator';
function BankDetail() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  // const search = useLocation().search;
  // const vendorid = new URLSearchParams(search).get('id');
  const [user, setUser] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setloading] = useState(false);
  const [errmessage, seterrmessage] = useState('');
  const [errmessagetype, seterrmessagetype] = useState('')
  const [alert, setalert] = useState(false);
  const [state, setState] = useState({
    pan: "",
    aadhar: "",
    accountnumber: "",
    holdername: "",
    bankname: "",
    ifsccode: ""
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
      pan: state.pan,
      aadhar: state.aadhar,
      holdername: state.holdername,
      bankname: state.bankname,
      accountnumber: state.accountnumber,
      ifsccode: state.ifsccode,
      vid: '9'
    }
    UpsertBankDetails(data).then((res) => {
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
    // debugger;
    const id = params.get("id");
    getBankDetail(id).then(res => {
      console.log(id)
      if (res && res.data === "No Rows Found") {
        setUser([])
        setloading(true);
      }
      else {

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
      name: "PAN No",
      selector: (row) => row.pan,
      sortable: true
    },
    {
      name: "Aadhar No",
      selector: (row) => row.aadhar,
      sortable: true
    },
    {
      name: "Account Hondler Name",
      selector: (row) => row.holdername,
      sortable: true
    },
    {
      name: "Bank Name",
      selector: (row) => row.bankname,
      sortable: true
    },
    {
      name: "Account Number",
      selector: (row) => row.accountnumber,
      sortable: true
    },
    {
      name: "IFSC Code",
      selector: (row) => row.ifsccode,
      sortable: true
    },



  ]
  const editDataform = () => {
    setShow(true);
    state.aadhar = user[0].aadhar;
    state.pan = user[0].pan;
    state.holdername = user[0].holdername;
    state.accountnumber = user[0].accountnumber;
    state.bankname = user[0].bankname;
    state.ifsccode = user[0].ifsccode
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
          {
            loading === true ? <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card">

                    <div className="card-header">
                      <h4 className="card-title">Official Documents</h4>
                      <Button variant="primary" onClick={() => editDataform()} style={{background:'#e3e730' ,border:'none'}}  >
                        Edit
                      </Button>
                      <Modal show={show} onHide={() => setShow(false)}>
                        <Modal.Header closeButton>
                          <Modal.Title>Modify Your Account Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <form>
                            <div className="mb-3">
                              <input type="text" className="form-control input-default " name='pan' value={state.pan} onChange={handleInputChange} placeholder="Enter Your Pan Number" />
                            </div>

                            <div className="mb-3">
                              <input type="text" className="form-control input-default "
                               name='aadhar' value={state.aadhar} onChange={handleInputChange} placeholder="Entet Adhar Number" />
                            </div>
                            <div className="mb-3">
                              <input type="text" className="form-control input-default " name='holdername' value={state.holdername} onChange={handleInputChange} placeholder="Enter Account Holder Name" />
                            </div>
                            <div className="mb-3">
                              <input type="text" className="form-control input-default " name='bankname' value={state.bankname} onChange={handleInputChange} placeholder="Enter Bank Name" />
                            </div>
                            <div className="mb-3">
                              <input type="text" className="form-control input-default " name='accountnumber' value={state.accountnumber} onChange={handleInputChange} placeholder="Enter Account Number" />
                            </div>
                            <div className="mb-3">
                              <input type="text" className="form-control input-default " name='ifsccode' value={state.ifsccode} onChange={handleInputChange} placeholder="Enter IFSC" />
                            </div>
                          </form>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={() => setShow(false)}>
                            Close
                          </Button>
                          <Button variant="primary" onClick={handleSubmit}  style={{background:'#e3e730' ,border:'none'}}>
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

export default BankDetail;