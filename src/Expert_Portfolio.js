import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { set } from 'react-hook-form';
import AlertMessage from './pages/constants/messagealert';
import reactSelect from 'react-select';
import LoadingIndicator from './pages/External/LoadingIndicator';
import { GetExpertPortfolio, UpsertBankDetails, UpsertExpertPortfolio } from './api';
function ExpertPortfolio() {
  const search = useLocation().search;
  const vendorid = new URLSearchParams(search).get('id');
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
  const handleFileInputChange = (event) => {
    const { name, files } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: files[0]
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('eimage', state.eimage);
    formData.append('ecategory', state.ecategory);
    // const data = {
    //   pan: state.pan,
    //   aadhar: state.aadhar,
    //   holdername: state.holdername,
    //   bankname: state.bankname,
    //   accountnumber: state.accountnumber,
    //   ifsccode: state.ifsccode,
    //   vid: '9'
    // }
    UpsertExpertPortfolio(formData).then((res) => {
      console.log(res);
      if (res.data === true && res) {
        setShow(false);
        setalert(true);
        seterrmessagetype('success');
        seterrmessage(`${res.data} Successfully`)
        getExpertPortfoliodata();

      }
      else if (res.data === false && res) {
        setShow(false);
        setalert(true);
        seterrmessagetype('failure');
        seterrmessage(`Something went wrong, Please tray again..`)
        getExpertPortfoliodata();
      }
    })
  };
  const getExpertPortfoliodata = () => {
    // debugger;
    GetExpertPortfolio().then(res => {
      console.log(vendorid)
      if (res && res.data) {


        setUser(res.data);
        setloading(true);

      }
    })
  }

  useEffect(() => {
    getExpertPortfoliodata();
  }, [])
  const column = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true
    },
    {
      name: "E Category",
      selector: (row) => row.ecategory,
      sortable: true
    },
    {
      name: "Image",
      selector: (row) => <div><img width="100%" height={150} 
      src={"https://naksa.org/portfolio-image/" + row.eimage} /></div>,
      sortable: true
    },



  ]
  const editDataform = () => {
    setShow(true);

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
                      <h4 className="card-title">Expert Portfolio</h4>
                      <Button variant="primary" onClick={() => editDataform()} style={{background:'#e3e730' ,border:'none'}}>
                        Add Expert Portfolio
                      </Button>
                      <Modal show={show} onHide={() => setShow(false)}>
                        <Modal.Header closeButton>
                          <Modal.Title>Add Expert Portfolio</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <form>
                            <div className="mb-3">
                              <input type="text" className="form-control input-default " name='ecategory' onChange={handleInputChange} placeholder="Enter ecategory" />
                            </div>


                            <div className="mb-3">
                              <input type="file" className="form-control input-default " name='eimage' onChange={handleFileInputChange} />
                            </div>
                          </form>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={() => setShow(false)}>
                            Close
                          </Button>
                          <Button variant="primary" onClick={handleSubmit} className='allBtn' style={{background:'#e3e730' ,border:'none'}}>
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

export default ExpertPortfolio;