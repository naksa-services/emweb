import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Form from 'react-bootstrap/Form'

import { useState, useEffect } from 'react';
import { getCallSupport, UpsertCallSupport } from '../api';
import DataTable from 'react-data-table-component';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { set } from 'react-hook-form';
import AlertMessage from './constants/messagealert';
import reactSelect from 'react-select';
import LoadingIndicator from './External/LoadingIndicator';
function CustomerExecutive() {
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
  const [drop, setDrop] = useState('');
  const [cid, setcid] = useState('');

  const [state, setState] = useState({
    id: "",
    createdby: "",
    name: "",
    remark: "",
    supporttype: "",
    reqstatus: "",
    receivedby: "",
   
    
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };


  const handleSubmit = (event) => {
    const vid = sessionStorage.getItem('vid');
    event.preventDefault();
    
  
    
    const data = {
         reqstatus:drop,
         vid:sessionStorage.getItem('vid')   
        
    }
    console.log(data)
  UpsertCallSupport(data,cid).then((res) => {

      console.log(res);
      if (res.status === true && res) {
        setShow(false);
        setalert(true);
        setcid('');
        seterrmessagetype('success');
        seterrmessage(`${res.data} Successfully`)
        getPersonalData();


      }
      else if (res.status === false && res) {
        setShow(false);
        setalert(true);
        setcid('');
        seterrmessagetype('failure');
        seterrmessage(`Something went wrong, Please tray again..`)
        getPersonalData();
      }
    })
  };
  const getPersonalData = () => {
    // debugger;
    const id = "call";
    getCallSupport(id).then(res => {
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
      name: "Id",
      selector: (row) => row.id,
      sortable: true
    },
    {
      name: "Createdby",
      selector: (row) => row.createdby,
      sortable: true
    },
    {
        name: "Name",
        selector: (row) => <p onClick={() => (row)}>{row.name}</p>,
        sortable: true
      },

    {
      name: "Remark",
      selector: (row) => row.remark,
      sortable: true
    },
    {
      name: "SupportType",
      selector: (row) => row.supporttype,
      sortable: true
    },
    {
      name: "ReqStatus",
      selector: (row) => row.reqstatus,
      sortable: true
    },
    
      {
        name: "Receivedby",
        selector: (row) => row.receivedby,
        sortable: true
      },
      
      {
        name:"View ",
        selector : (row) => <div className='row'>
          <div className='col-md-6' 
          onClick={() => _openModal(row.id)} ><i className='fa fa-eye'></i></div> </div>,
        sortable:true
      },   


  ]
//   const editDataform = () => {
//  setShow(true);
// //    state.aadhar = user[0].aadhar;
// //    state.pan = user[0].pan;
// //     state.holdername = user[0].holdername;
// //     state.accountnumber = user[0].accountnumber;
// //     state.bankname = user[0].bankname;
// //     state.ifsccode = user[0].ifsccode
//   }
const _openModal =(id) =>{
  setcid(id);
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
                      <h4 className="card-title">Customer Call Supports</h4>
                       {/* <Button variant="primary" onClick={() => editDataform()}>
                        Edit
                      </Button>  */}
                    
                    <Modal show={show} onHide={() => setShow(false)}>
                        <Modal.Header closeButton>
                          <Modal.Title> Modify Customer Call supports</Modal.Title>
                        </Modal.Header>
                        <Modal.Body> 
                           <form>
                            {/* <div className="mb-3">
                              <input type="text" className="form-control input-default " name='pan' value={state.pan} onChange={handleInputChange} placeholder="Enter Your Pan Number" />
                            </div>

                            <div className="mb-3">
                              <input type="text" className="form-control input-default " name='aadhar' value={state.aadhar} onChange={handleInputChange} placeholder="Entet Adhar Number" />
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
                            </div> */}
                     <div className="mb-3">
                      <Form.Select name='reqstatusss' onChange={(e) => setDrop(e.target.value)} aria-label="Default select example" >
                        <option> --- Select --- </option>
                        <option value="Success">Success</option>
                        <option value="Accept">Accept</option>
                        <option value="Pending">Pending</option>
                        
                      </Form.Select><br/>
                      <Button variant="secondary" onClick={() => setShow(false)} style={{marginLeft:'240px'}}>
                            Close
                          </Button>&nbsp;&nbsp;&nbsp;
                          <Button variant="primary"  onClick={handleSubmit}>
                            Save Changes
                          </Button> 
                      </div>
                          </form>
                        </Modal.Body>
                        </Modal>
                        <Modal.Footer>
                         {/* <Button variant="secondary" onClick={() => setShow(false)}>
                            Close
                          </Button>
                          <Button variant="primary" onClick={handleSubmit}>
                            Save Changes
                          </Button>  */}
                        </Modal.Footer> 
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

export default CustomerExecutive;