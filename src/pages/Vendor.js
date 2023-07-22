import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getVendor,getPersonalIndivisualDetails } from '../api';
import DataTable from 'react-data-table-component';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AlertMessage from './constants/messagealert';
import LoadingIndicator from './External/LoadingIndicator';
function Vendor() {

    const [user, setUser] = useState([]);
    const [show,setShow]=useState(false);
    const [loading, setloading] = useState(false);
    const [errmessage, seterrmessage] = useState('');
    const [errmessagetype, seterrmessagetype] = useState('')
    const [alert, setalert] = useState(false);
    const navigate=useNavigate();
    const gotoPersonaldetails = (d) => {
      navigate(`/bank_upadate?id=${d.user.id}`);
  }
  
    const [state, setState] = useState({
        id: "",
        name: "",
        image:"",
        phone:"",
        age:"",
        // email:"",
        gender:"",
        // dob:"",
        address:"",
        // state:"",
        // transdate:"",
       
      });

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
      };
     
  const getPersonalData =() =>{
    getVendor().then(res => {
        if(res){
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
        selector : (row) => <p onClick={()=> gotoPersonaldetails(row)}>{row.user.name}</p>,
        sortable:true
      },
      {
        name:"phone",
        selector : (row)=>row.user.phone,
        sortable:true
      },
      {
        name:"address",
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
        selector : (row) => row.longitude,
        sortable:true
      },
      
      {
        name:"image",
        selector : (row) => `${row.address}, ${row.city},${row.distric}, ${row.state}, ${row.pincode} `,
        sortable:true
      },
      {
        name:"Aadhar_card",
        selector : (row) => row.aadress_card   ,
        sortable:true
      },
      
      
      {
        name:"Pan_Card",
        selector : (row) => row.pan_card,
        sortable:true
      },
      {
        name:"Account_Number",
        selector : (row) => row.pan_card,
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
        name:"Gender",
        selector : (row) => row.gender,
        sortable:true
      },
      {
        name:"Notification_Id",
        selector : (row) => row.notification_id,
        sortable:true
      },
      {
        name:"Email",
        selector : (row) => row.email,
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


      {
        name: "Action",
        selector: (row) =><p onClick={()=> gotoPersonaldetails(row)}><Link  to="/all-vendor">
        View
      </Link></p>

      // selector:(row)=><p onClick={()=> gotoPersonaldetails(row)}>{row.name}</p>,
        
    },
      
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
                                        <h4 className="card-title">All Vendor</h4>
                                        {/* <Button variant="success" onClick={() => editDataform()}>
                                                                     Edit
                                        </Button> */}
                                        {/* <Modal show={show} onHide={() => setShow(false)}>
                                            <Modal.Header closeButton>
                                            <Modal.Title>Modify Your Account Details</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                            <form>
                                            <div className="mb-3">
                                                <input type="text" className="form-control input-default " name='name'  value={state.name} onChange={handleInputChange} placeholder="Enter Name" />
                                            </div>
                                           
                                            <div className="mb-3">
                                                <input type="text" className="form-control input-default " name='email'  value={state.email} onChange={handleInputChange} placeholder="Enter Email" />
                                            </div>
                                            <div className="mb-3">
                                                <input type="text" className="form-control input-default " name='phone'  value={state.phone} onChange={handleInputChange} placeholder="Enter Phone" />
                                            </div>
                                           
                                            
                                            <div className="mb-3">
                                            <select name="gender" value={state.gender} onChange={handleInputChange} className="form-control input-default ">
                                                <option value="none" selected>Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">other</option>
                                            </select>
                                            </div>
                                            <div className="mb-3">
                                                <input type="date" className="form-control input-default "  name='dob'  value={state.dob} onChange={handleInputChange}placeholder="Enter Date of Birth" />
                                            </div>
                                            <div className="mb-3">
                                                <input type="text" className="form-control input-default "  name='address'  value={state.address} onChange={handleInputChange}placeholder="Enter Address " />
                                            </div>
                                            <div className="mb-3">
                                                <input type="text" className="form-control input-default "  name='state'  value={state.state} onChange={handleInputChange}placeholder="Enter Start date" />
                                            </div>
                                            

                                        </form>
                                            </Modal.Body>
                                            <Modal.Footer>
                                            <Button variant="secondary" onClick={()=>setShow(false)}>
                                                Close 
                                            </Button>
                                            <Button variant="primary"type="submit"  onClick={handleSubmit}>
                                                Save Changes
                                            </Button>
                                            </Modal.Footer>
                                        </Modal> */}
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
                    : <div><LoadingIndicator/></div>
                }  
                    </div>
                </div>

                
        </div >

    )
}

export default Vendor;