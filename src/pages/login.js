
import React from 'react'
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {  VendorLogin } from '../api';
import AlertMessage from './constants/messagealert';
const Login = () => {
    const initialValues = {phone:"", password:""};
    const [formValues, setformValues] = useState(initialValues);
    const [formErrors, setformErros] = useState({});
    const [fsubmit, fissubmit] = useState(false);
    const [errmessage, seterrmessage] = useState('');
    const [errmessagetype, seterrmessagetype] = useState('')
    const [alert, setalert] = useState(false);
    const formRef = useRef();
    const handleChange = (e) => {
        const {name, value} = e.target;
        setformValues({...formValues, [name]:value});
        // console.log(formValues);
    }

    const validate = (value) => {
        const error ={};
        if(!value.phone){
            error.phone = "Phone is required";
        }
        if(!value.password){
            error.password = "Password is required";
        }
        return error;
    }
    const LoginFunc = (e) =>{
        e.preventDefault();
        setformErros(validate(formValues));
        fissubmit(true);
        
    }
    useEffect(() => {
        // sessionStorage.clear();
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && fsubmit){
            console.log(formValues);
            login(formValues.phone, formValues.password);
        }
    }, [formErrors])

    const userIdRef = useRef(null);
    const pwdRef = useRef(null);

    const login = (phone, password) => {
        VendorLogin(phone, password)
            .then(res => {
                if (res && res.status === "Success") {
                    console.log(res);
                    setalert(true);
                    seterrmessagetype('success');
                    seterrmessage(`Login Successfully`)
                 
                    
                        console.log(res.result);
                        sessionStorage.setItem("loggedIn", true);
                        sessionStorage.setItem("name", res.data.name);
                        sessionStorage.setItem("fid", res.data.id);
                        sessionStorage.setItem("image", res.image);
                        console.log(res.token)
                        window.location.reload(false);
                    
                    
                }
                else if(res && res.status === "Fail"){
                    setalert(true);
                    seterrmessagetype('failure');
                    seterrmessage(res.message)
                }
                else {
                    setalert(true);
                    seterrmessagetype('failure');
                    seterrmessage('Something went wrong!, please try again..')
                    alert("Invalid Credentials");
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
                                            <div className="text-center mb-3">
                                                <a href="index.html"><img src="em.jpg" alt="" width="180" style={{borderRadius:'5px'}} /></a>
                                            </div>
                                            <h4 className="text-center mb-4">Sign in your account</h4>

                                            <div className="form-group">
                                                <label className="mb-1"><strong>Phone</strong></label>
                                                <input type="number" name='phone' value={formValues.phone} 
                                                onChange={handleChange} className="form-control" 
                                                placeholder='Enter phone ...' />
                                            </div>
                                            <p style={{color:"red"}}>{formErrors.username}</p>
                                            <div className="form-group">
                                                <label className="mb-1"><strong>Password</strong></label>
                                                <input type="password"  name='password'
                                                 value={formValues.password} onChange={handleChange} 
                                                 className="form-control" placeholder='Enter password .' />
                                            </div>
                                            <p style={{color:"red"}}>{formErrors.password}</p>
                                            <div className="form-row d-flex justify-content-between 
                                            mt-4 mb-2">
                                                
                                                <div className="form-group">
                                                    <a href="page-forgot-password.html">Forgot Password?</a>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <button type="button" onClick={LoginFunc} 
                                                className="btn btn-primary btn-block" style={{background:'#b11c26',border:'1px solid #b11c26'}}>Sign Me In</button>
                                            </div>

                                            <Link to='/register'>
                                      Don't Have account, Register here</Link>
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


export default Login;