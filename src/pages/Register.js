
import React from 'react'
import { useRef } from 'react';
import Footer from './footer';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {  VendorRegister } from '../api';
import AlertMessage from './constants/messagealert';
const Register = () => {
    const initialValues = {name:"", phone:"" ,password:"", role:2,franchiser:1};
    const [formValues, setformValues] = useState(initialValues);
    const [formErrors, setformErros] = useState({});
    const [fsubmit, fissubmit] = useState(false);
    const [errmessage, seterrmessage] = useState('');
    const [errmessagetype, seterrmessagetype] = useState('')
    const [alert, setalert] = useState(false);
    const formRef = useRef();

    const navigate=useNavigate();





    const handleChange = (e) => {
        const {name, value} = e.target;
        setformValues({...formValues, [name]:value});
        // console.log(formValues);
    }





    const validate = (value) => {
        const error ={};
        if(!value.name){
            error.name = "Name is required";
        }
        if(!value.phone){
            error.phone = "Phone is required";
        }
        if(!value.password){
            error.password = "Password is required";
        }
        return error;
    }


    const RegisterFunc = (e) =>{
        e.preventDefault();
        setformErros(validate(formValues));
        fissubmit(true);
        register(formValues);
              
    }



    

    const userIdRef = useRef(null);
    const pwdRef = useRef(null);

    const register = (body) => {
        VendorRegister(body)
            .then(res => {
                if (res && res.result === "success") {
                    console.log(res.response.id);
                    setalert(true);
                    seterrmessagetype('success');
                    seterrmessage(`Registered Successfully`)
                    sessionStorage.setItem("fid", res.response.id);
                    navigate('/basicdetails')
 
                    
                }
                else if(res  && res.result === "fail"){
                    setalert(true);
                    seterrmessagetype('failure');
                    seterrmessage(res.response)
                }
            })
        }


    return (

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
                                           
                                            <h4 className="text-center mb-4">REGISTER</h4>

                                            <div className="form-group">
                                                <label className="mb-1"><strong>Name :</strong></label>
                                                <input type="text" name='name' value={formValues.name} 
                                                onChange={handleChange} className="form-control" 
                                                placeholder='Enter Your Name ...' />
                                            </div>
                                            <p style={{color:"red"}}>{formErrors.name}</p>
                                            <div className="form-group">
                                                <label className="mb-1"><strong>Phone</strong></label>
                                                <input type="text"  name='phone'
                                                 value={formValues.phone} onChange={handleChange} 
                                                 className="form-control" placeholder='Enter Your Number ... ' />
                                            </div>
                                            <p style={{color:"red"}}>{formErrors.phone}</p>
                                            <div className="form-group">
                                                <label className="mb-1"><strong>Password</strong></label>
                                                <input type="password"  name='password'
                                                 value={formValues.password} onChange={handleChange} 
                                                 className="form-control" placeholder='Enter password ...' />
                                            </div>
                                            <p style={{color:"red"}}>{formErrors.password}</p>
                                            <div className="form-row d-flex justify-content-between 
                                            mt-4 mb-2">
                                               
                                            </div>
                                            <div className="text-center">
                                                <button type="button" onClick={RegisterFunc} 
                                                className="btn btn-primary btn-block" style={{background:'#b11c26',border:'1px solid #b11c26'}}>Submit</button>
                                            </div>
<br/>
                                            {/* <Link to='/basicdetails'>
                                      Don't Have account, BasicDetails here</Link> */}
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


export default Register;