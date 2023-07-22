import React from 'react'
import { useState, useEffect } from 'react';
import { getFrenchiser } from '../api';
import DataTable from 'react-data-table-component';
import AlertMessage from './constants/messagealert';
import LoadingIndicator from './External/LoadingIndicator';
import Table from 'react-bootstrap/Table';
function frenchiser() {

    const [user, setUser] = useState([]);
    const [loading, setloading] = useState(false);
    const [errmessage, seterrmessage] = useState('');
    const [errmessagetype, seterrmessagetype] = useState('')
    const [alert, setalert] = useState(false);
   
  
  const getPersonalData =() =>{
    getFrenchiser().then(res => {
        if(res ){
            console.log(res);
            setloading(true);
            setUser(res);
        }
    })
  }

  useEffect(() => {
    getPersonalData();
  },[])
  const column =[
    {
        name:"Id",
        selector : (row) => row.id,
        sortable:true
      },
      {
        name:"Name",
        selector : (row) => <p onClick={()=> gotoPersonaldetails(row)}>{row.name}</p>,
        sortable:true
      },
      {
        name:"Image",
        selector : (row) =>row.image,
        sortable:true
      },
      {
        name:"Phone",
        selector : (row) => row.phone,
        sortable:true
      },
      {
        name:"Email",
        selector : (row) => row.email,
        sortable:true
      },
      {
        name:"Gender",
        selector : (row) => row.gender,
        sortable:true
      },
      {
        name:"Address",
        selector : (row) => row.address,
        sortable:true
      },
      {
        name:"Latitude",
        selector : (row) => row.latitude,
        sortable:true
      },
      {
        name:"Longitude",
        selector : (row) => row.longitude   ,
        sortable:true
      },
    

      {
        name:"Aadhar_card",
        selector : (row) => row.aadhar_card,
        sortable:true
      },

      {
        name:"pan_card",
        selector : (row) => row.pan_card,
        sortable:true
      },
      {
        name:"account_number",
        selector : (row) => row.account_number,
        sortable:true
      },
      {
        name:"IFSC_CODE",
        selector : (row) => row.ifsc_code,
        sortable:true
      },
      {
        name:"Account_Holder",
        selector : (row) => row.account_holder,
        sortable:true
      },
      {
        name:"Bank_Name",
        selector : (row) => row.bank_name,
        sortable:true
      },
      {
        name:"Branch",
        selector : (row) => row.branch,
        sortable:true
      },
      {
        name:"Qualification",
        selector : (row) => row.qualification,
        sortable:true
      },
      {
        name:"Age",
        selector : (row) => row.age,
        sortable:true
      },
      {
        name:"Notification_Id",
        selector : (row) => row.notification_id,
        sortable:true
      },
      {
        name:"Amount",
        selector : (row) => row.amount,
        sortable:true
      },
      {
        name:"No_of_Vender",
        selector : (row) => row.no_of_vender,
        sortable:true
      },
    //   {
    //     name: "Action",
    //     selector: (row) =><p onClick={()=> gotoPersonaldetails(row)}><Link  to="/all-vendor">
    //     View
    //   </Link></p>

    //   selector:(row)=><p onClick={()=> gotoPersonaldetails(row)}>{row.name}</p>,
        
    // },
      
  ]
  // const editDataform = () => {
  //   setShow(true);
  //   state.id=user[0].id;
  //   state.name=user[0].name;
    
  //   state.email=user[0].email;
  //   state.phone=user[0].phone;
  //   state.gender=user[0].gender;
  //   state.dob=user[0].dob;
  //   state.address=user[0].address;
  //   state.state=user[0].state;
  //   state.transdate=user[0].transdate
  // } 
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
                                        <h4 className="card-title">FrenchiserDetails</h4>
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
                                    <th>longitude</th>
                                </tr>

                            </thead>
                            
                            <tbody>
                                <tr >
                                    <td key={user.id}>{user.user.id}</td>
                                    <td>{user.user.name}</td>
                                    <td>{user.user.phone}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.address}</td>
                                    <td>{user.latitude}</td>
                                    <td>{user.longitude}</td>
                            
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
                                    
                            
                                </tr>
                               
                            </tbody>
                        </Table> 


                                </div>
                                       
                                    </div>
                                </div>
                        </div>

                    </div>
                    : <div><LoadingIndicator/></div>
                }  
                    </div>
                </div>

                
        </div >

    )
}

export default frenchiser;