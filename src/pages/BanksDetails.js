
import React from 'react'
import { useRef } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import {  BankDetail } from '../api';
const BanksDetails = () => {
    const initialValues = {aadhar_card:"",pan_card:"",account_number:"",ifsc_code:"",account_holder:"",bank_name:"",branch:"",user:sessionStorage.getItem("fid")};
    const [formValues, setformValues] = useState(initialValues);
    const [formErrors, setformErros] = useState({});
    const [fsubmit, fissubmit] = useState(false);
    const formRef = useRef();
    const navigate = useNavigate();
    const handleChange = (e) => {
        const {name, value} = e.target;
        setformValues({...formValues, [name]:value});
        // console.log(formValues);
    }

    const validate = (value) => {
        const error ={};
        if(!value.aadhar_card){
            error.aadhar_card= "Aadhar is required";
        }
        if(!value.pan_card){
            error.pan_card = "Pan is required";
        }

        if(!value.account_no){
            error.account_no = "Account Number is required";
        }

        if(!value.ifsc_code){
            error.ifsc_code = "IFSC Code is required";
        }

        if(!value.account_holder){
            error.account_holder= "Account Holder is required";
        }

        if(!value.bank_name){
            error.bank_name = "Bank Name is required";
        }
        if(!value.branch){
            error.branch= "Branch Name is required";
        }
        return error;
    }
    const BankFunc = (e) =>{
        e.preventDefault();
        setformErros(validate(formValues));
        fissubmit(true);

        bank(formValues);
        
    }
    
    const userIdRef = useRef(null);
    const pwdRef = useRef(null);

    const bank = (body) => {
        BankDetail(body)
            .then(res => {
                if (res && res.result === "Success") {
                    navigate('/login')
                    console.log(res);
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
                                        <div className="auth-form">
                                           
                                            <h4 className="text-center mb-4">BANK DETAILS</h4>

                                            <div className="form-group">
                                                <label className="mb-1"><strong>Aadhar_Card :</strong></label>
                                                <input type="text" name='aadhar_card' value={formValues.aadhar_card} 
                                                onChange={handleChange} className="form-control" 
                                                placeholder='Enter aadhar_card_no ...' />
                                            </div>
                                            <p style={{color:"red"}}>{formErrors.aadhar_card}</p>
                                            <div className="form-group">
                                                <label className="mb-1"><strong>Pan_Card :</strong></label>
                                                <input type="text"  name='pan_card'
                                                 value={formValues.pan_card} onChange={handleChange} 
                                                 className="form-control" placeholder='Enter pan_card ... ' />
                                            </div>

                                            <p style={{color:"red"}}>{formErrors.pan_card}</p>
                                            <div className="form-group">
                                                <label className="mb-1"><strong>Account_Number	:</strong></label>
                                                <input type="text"  name='account_number'
                                                 value={formValues.account_number} onChange={handleChange} 
                                                 className="form-control" placeholder='Enter account_number ... ' />
                                            </div>
                                            {/* <p style={{color:"red"}}>{formErrors.account_no}</p> */}

                                            <div className="form-group">
                                                <label className="mb-1"><strong>IFSC_Code</strong></label>
                                                <input type="text"  name='ifsc_code'
                                                 value={formValues.ifsc_code} onChange={handleChange} 
                                                 className="form-control" placeholder='Enter ifsc_code ... ' />
                                            </div>

                                            <p style={{color:"red"}}>{formErrors.ifsc_code}</p>

                                            <div className="form-group">
                                                <label className="mb-1"><strong>Account_Holder :		</strong></label>
                                                <input type="text"  name='account_holder'
                                                 value={formValues.account_holder} onChange={handleChange} 
                                                 className="form-control" placeholder='Enter account_holder ... ' />
                                            </div>
                                            <p style={{color:"red"}}>{formErrors.account_holder}</p>

                                            <div className="form-group">
                                                <label className="mb-1"><strong>Bank_Name	</strong></label>
                                                <input type="text"  name='bank_name'
                                                 value={formValues.bank_name} onChange={handleChange} 
                                                 className="form-control" placeholder='Enter bankname ... ' />
                                            </div>
                                            <p style={{color:"red"}}>{formErrors.bank_name}</p>

                                            <div className="form-group">
                                                <label className="mb-1"><strong>Branch	</strong></label>
                                                <input type="text"  name='branch'
                                                 value={formValues.branch} onChange={handleChange} 
                                                 className="form-control" placeholder='Enter  branch ' />
                                            </div>
                                            <p style={{color:"red"}}>{formErrors.branch}</p>
                                            <div className="form-row d-flex justify-content-between 
                                            mt-4 mb-2">
                                               
                                            </div>
                                            <div className="text-center">
                                                <button type="button" onClick={BankFunc} 
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
    )
}


export default BanksDetails;