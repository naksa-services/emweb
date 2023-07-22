
import React from 'react'
import { useRef } from 'react';
import Footer from './footer';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {  BasicDetail,  } from '../api';
import AlertMessage from './constants/messagealert';
const BasicDetails = () => {
    const initialValues = {address:"", qualification:"",age:"",gender:"",email:"",amount:"" ,no_of_vender:"1", latitude:"gjhv", longitude:"bhjb", notification_id:"bjk", user:sessionStorage.getItem("fid")};
    const [formValues, setformValues] = useState(initialValues);
    const [formErrors, setformErros] = useState({});
    const [fsubmit, fissubmit] = useState(false);
    const [errmessage, seterrmessage] = useState('');
    const [errmessagetype, seterrmessagetype] = useState('')
    const [alert, setalert] = useState(false);
    const formRef = useRef();
    const naviagte = useNavigate();
    const handleChange = (e) => {
        const {name, value} = e.target;
        setformValues({...formValues, [name]:value});
        // console.log(formValues);
    }

    const validate = (value) => {
        const error ={};
        if(!value.address){
            error.address = "Address is required";
        }
        if(!value.qualification){
            error.qualification = "Qualification is required";
        }
        if(!value.age){
            error.age = "Age is required";
        }
        if(!value.gender){
            error.gender = "Gender is required";
        }
        if(!value.email){
            error.email = "Email is required";
        }
        if(!value.amount){
            error.amount = "Amount is required";
        }
        if(!value.no_of_vender){
            error.no_of_vender= "No_OF_Vender is required";
        }
        return error;
    }
    const BasicFunc = (e) =>{
        e.preventDefault();
        setformErros(validate(formValues));
        fissubmit(true);
        basic(formValues)
        
    }
    

    const userIdRef = useRef(null);
    const pwdRef = useRef(null);

    const basic = (body) => {
        BasicDetail(body)
            .then(res => {
                if (res && res.result === "Success") {
                    setalert(true);
                    seterrmessagetype('success');
                    seterrmessage(`Added Successfully`)
                    naviagte('/banksdetails')
                    console.log(res);
                }
                else{
                    setalert(true);
                    seterrmessagetype('failure');
                    seterrmessage(`Something went wrong!, please try again`)
                }
            })
        }


    return (
<div>
    <br/>
        <div className="vh-100  ">
            <div className="authincation h-100">
                <div className="container h-100">
                    <div className="row justify-content-center mt-100px h-100 align-items-center">
                        <div className="col-md-6">
                            <div className="authincation-content">
                                <div className="row no-gutters">
                                    <div className="col-xl-12">
                                    <AlertMessage
              show={alert}
              onhide={() => setalert(false)}
              data={errmessagetype}
              message={errmessage}
            />
                                        <div className="auth-form">
                                           
                                            <h4 className="text-center mb-4">BASIC DETAILS</h4>

                                            <div className="form-group">
                                                <label className="mb-1"><strong>Address :</strong></label>
                                                <input type="text" name='address' value={formValues.address} 
                                                onChange={handleChange} className="form-control" 
                                                placeholder='Enter Address' />
                                            </div>
                                            <p style={{color:"red"}}>{formErrors.address}</p>
                                            <div className="form-group">
                                                <label className="mb-1"><strong>Qualification :</strong></label>
                                                <input type="text"  name='qualification'
                                                 value={formValues.qualification} onChange={handleChange} 
                                                 className="form-control" placeholder='Enter Qualification' />
                                            </div>
                                            <p style={{color:"red"}}>{formErrors.qualification}</p>

                                            <div className="form-group">
                                                <label className="mb-1"><strong>Age :</strong></label>
                                                <input type="text"  name='age'
                                                 value={formValues.age} onChange={handleChange} 
                                                 className="form-control" placeholder='Enter age ... ' />
                                            </div>
                                            <p style={{color:"red"}}>{formErrors.age}</p>
                                            <div className="form-group">
                                                <label className="mb-1"><strong>Gender	:</strong></label>
                                                <input type="text"  name='gender'
                                                 value={formValues.gender} onChange={handleChange} 
                                                 className="form-control" placeholder='Enter gender ... ' />
                                            </div>
                                            <p style={{color:"red"}}>{formErrors.gender}</p>
                                            <div className="form-group">
                                                <label className="mb-1"><strong>Email :</strong></label>
                                                <input type="email"  name='email'
                                                 value={formValues.email} onChange={handleChange} 
                                                 className="form-control" placeholder='Enter email ...' />
                                            </div>
                                            <p style={{color:"red"}}>{formErrors.email}</p>
                                            <div className="form-group">
                                                <label className="mb-1"><strong>Amount	:</strong></label>
                                                <input type="text"  name='amount'
                                                 value={formValues.amount} onChange={handleChange} 
                                                 className="form-control" placeholder='Enter amount ...' />
                                            </div>
                                            <p style={{color:"red"}}>{formErrors.amount}</p>
                                            {/* <div className="form-group">
                                                <label className="mb-1"><strong>No_OF_Vender :</strong></label>
                                                <input type="text"  name='no_of_vender'
                                                 value={formValues.no_of_vender} onChange={handleChange} 
                                                 className="form-control" placeholder='Enter no_of_vender ... ' />
                                            </div>
                                            <p style={{color:"red"}}>{formErrors.no_of_vender}</p>
                                            <div className="form-row d-flex justify-content-between 
                                            mt-4 mb-2">
                                               
                                            </div> */}
                                            <div className="text-center">
                                                <button type="button" onClick={BasicFunc} 
                                                className="btn btn-primary btn-block" style={{background:'#b11c26',border:'1px solid #b11c26'}}>Submit</button>
                                            </div>
<br/>
                                            {/* <Link to='/banksdetails'>
                                      Don't Have account, BankDetails here</Link> */}
                               </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
    )
}


export default BasicDetails;