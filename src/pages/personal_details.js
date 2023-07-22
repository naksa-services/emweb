import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
 getSinglePersonalDetails } from '../api';
import DataTable from 'react-data-table-component';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AlertMessage from './constants/messagealert';
import LoadingIndicator from './External/LoadingIndicator';
import Table from 'react-bootstrap/Table';

function PersonalDetails() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [user, setUser] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setloading] = useState(false);
  const [errmessage, seterrmessage] = useState('');
  const [errmessagetype, seterrmessagetype] = useState('')
  const [alert, setalert] = useState(false);
  const navigate = useNavigate();
  const gotoPersonaldetails = (d) => {
    navigate(`/bankupadate?id=${d.user.id}`);
  }
  

 
  
    const getPersonalData = () => {

    const id = params.get("id");
    getSinglePersonalDetails(id).then(res => {
      if (res) {
        console.log(res);
        setloading(true);
        setUser(res);
      }
    })
  }

  useEffect(() => {
    getPersonalData();
  }, {})
  const column = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true
    },
    {
      name: "Name",
      selector: (row) => <p onClick={() => gotoPersonaldetails(row)}>{row.user.name}</p>,
      sortable: true
    },
    {
      name: "Image",
      selector: (row) => <img height={"80px"} width={"80px"} src={"https://naksa.org/vendor-image/"+row.photo} alt="" />,
      sortable: true
    },
    {
      name: "Phone",
      selector: (row) => row.user.phone,
      sortable: true
    },
    {
      name: "address",
      selector: (row) => row.address,
      sortable: true
    },
    {
      name: "latitude",
      selector: (row) => row.latitude,
      sortable: true
    },
    {
      name: "longitude",
      selector: (row) => row.logitude,
      sortable: true
    },
    {
      name: "aadhar_card",
      selector: (row) => row.aadhar_card,
      sortable: true
    },
    {
      name: "pan_card",
      selector: (row) => row.pan_card,
      sortable: true
    },


    {
      name: "account_number",
      selector: (row) => row.account_number,
      sortable: true
    },
    {
      name: "ifsc_code",
      selector: (row) => row.ifsc_code,
      sortable: true
    },
    {
      name: "account_holder",
      selector: (row) => row.account_holder,
      sortable: true
    },
    {
      name: "bank_name",
      selector: (row) => row.bank_name,
      sortable: true
    },
    {
      name: "branch",
      selector: (row) => row.branch,
      sortable: true
    },
    {
      name: "qualification",
      selector: (row) => row.qualification,
      sortable: true
    },
    {
      name: "age",
      selector: (row) => row.age,
      sortable: true
    },
    {
      name: "gender",
      selector: (row) => row.gender,
      sortable: true
    },

    {
      name: "notification_id",
      selector: (row) => row.notification_id,
      sortable: true
    },
    {
      name: "email",
      selector: (row) => row.email,
      sortable: true
    },

    {
      name: "amount",
      selector: (row) => row.amount,
      sortable: true
    },{
      name: "no_of_vender",
      selector: (row) => row.no_of_vender,
      sortable: true
    },

    {
      name: "Action",
      selector: (row) => <p onClick={() => gotoPersonaldetails(row)}><Link to="/all-vendor">
        View
      </Link></p>

      // selector:(row)=><p onClick={()=> gotoPersonaldetails(row)}>{row.name}</p>,

    },

  ]
  
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
            loading === true ?
              <div className="container-fluid">


                <div className="row">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">PersonalDetails</h4>
                                            </div>
                      <div className="card-body">
                      <Table striped bordered hover>
                            <thead>
                                <tr style={{color:'white',background:'#b11c26'}}>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>Address</th>
                                    <th>latitude</th>
                                    {/* <th>longitude</th> */}
                                </tr>

                            </thead>
                            
                            <tbody>
                                <tr >
                                    <td key={user.user.id}>{user.user.id}</td>
                                    <td>{user.user.name}</td>
                                    <td>{user.user.phone}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.address}</td>
                                    <td>{user.latitude}</td>
                                    {/* <td>{user.longitude}</td> */}
                            
                                </tr>
                               
                            </tbody>
                        </Table> 

                                <Table striped bordered hover>
                            <thead>
                                <tr style={{color:'white',background:'#b11c26'}}>
                                    {/* <th>ID</th> */}
                                    <th>AadharCard</th>
                                    <th>PanCard</th>
                                    <th>AccountNumber</th>
                                    <th>IFSCCode</th>
                                    <th>AccountHolder</th>
                                    {/* <th>BankName</th> */}
                                    {/* <th>Branchth> */}
                                </tr>

                            </thead>
                            
                            <tbody>
                                <tr >
                                    {/* <td key={user.id}>{user.user.id}</td> */}
                                    <td>{user.aadhar_card}</td>
                                    <td>{user.pan_card}</td>
                                    <td>{user.account_number}</td>
                                    <td>{user.ifsc_code}</td>
                                    <td>{user.account_holder}</td>
                                    
                            
                                </tr>
                               
                            </tbody>
                        </Table> 
                              

                        <Table striped bordered hover>
                            <thead>
                                <tr style={{color:'white',background:'#b11c26'}}>
                                    {/* <th>ID</th> */}
                                    <th>BankName</th>
                                    <th>Branch</th>
                                    <th>Qualification</th>
                                    <th>Age</th>
                                    <th>NotificationId</th>
                                    {/* <th>Amount</th>
                                    <th>No_OF_Vender</th> */}
                                    {/* <th>BankName</th> */}
                                    {/* <th>Branchth> */}
                                </tr>

                            </thead>
                            
                            <tbody>
                                <tr style={{background:'white'}}>
                                    {/* <td key={user.id}>{user.user.id}</td> */}
                                    <td>{user.bank_name}</td>
                                    <td>{user.branch}</td>
                                    <td>{user.qualification}</td>
                                    <td>{user.age}</td>
                                    <td>{user.notification_id}</td>
                                    
                            
                                </tr>
                               
                            </tbody>
                        </Table> 
                        <Table striped bordered hover>
                            <thead>
                                <tr style={{color:'white',background:'#b11c26'}}>
                                   
                                    {/* <th>ID</th> */}
                                    <th>longitude</th>

                                    <th>Amount</th>
                                    <th>No_OF_Vender</th> 
                                    {/* <th>BankName</th> */}
                                    {/* <th>Branchth> */}
                                </tr>

                            </thead>
                            
                            <tbody>
                                <tr >
                                    <td>{user.amount}</td>
                                    <td>{user.no_of_vender}</td>
                                    <td>{user.longitude}</td>

                            
                                </tr>
                               
                            </tbody>
                        </Table> 

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

export default PersonalDetails;