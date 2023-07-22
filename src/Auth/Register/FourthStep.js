import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import {City, Country, State} from 'country-state-city';
import axios from 'axios';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { VendorDocDTL, VendorExpDTL } from '../../api';
// import { BASE_API_URL } from '../utils/constants';

const OfficialDetails = (props) => {
  const navigate = useNavigate();
  const { user } = props;
  const { register, handleSubmit, formState: {errors} } = useForm({
    defaultValues: {
      user_email: user.user_email,
      user_password: user.user_password
    }
  });
  
  const onSubmit = (data) => {
    console.log(data);
    onsubmitdoc(data);
    onsubmitExpDetails(data);
  };
  const onsubmitdoc =(data) =>{
    const vidPin = sessionStorage.getItem("vid");
    let body = {
      
        pan:data.pan,
        aadhar:data.aadhar,
        bankname:data.bankname,
        accountnumber:data.accountnumber,
        ifsccode:data.ifsccode,
        holdername:data.holdername,
        vid:vidPin
      
  }
  onSubmitVendorDocDEtaila(body);
  }

  const onsubmitExpDetails =(data) => {
    const vidPin = sessionStorage.getItem("vid");
    let body={
      companyname:data.companyname,
      startdate:data.startdate,
      enddate:data.enddate,
      workreference:data.workreference,
      vid:vidPin,
    }
    onSubmitVendorExpDEtaila(body);
  }
  const onSubmitVendorDocDEtaila = (body) => {
    VendorDocDTL({...body}).then(res => {
      console.log(res);
      if(res && res.status && (res.data==="inserted" || res.data==="updated")){
        console.log("Inserted Successfully");
        
      }
      else{
        console.log("not  inserted successfully");
      }
    })
  }

  const onSubmitVendorExpDEtaila = (body) => {
    VendorExpDTL({...body}).then(res => {
      console.log(res);
      if(res && res.status && res.data==="inserted"){
        console.log("Inserted Successfully final");
        
      }
      else{
        console.log("not  inserted successfully");
      }
    })
  }
  const skills = [
    {
      value: 1,
      label: "Hindi"
    },
    {
      value: 2,
      label: "English"
    },
    {
      value: 3,
      label: "Urdu"
    },
    {
      value: 4,
      label: "Tamil"
    },
    {
      value: 5,
      label: "Punjabi"
    },
    {
      value: 6,
      label: "Marathi"
    },
    {
      value: 7,
      label: "Gujrati"
    }
  ];
 
  const [selectedOption, setSelectedOption] = useState(null);
 
  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedOption(e);
  }
  
  return (
    <div className='col-md-8 offset-md-2'>
        <div className='cnt-style '>
          <div className='text-center container'>
          <h5>Official Details</h5>
          <hr />
          </div>
          
          <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
          <div className='row'>
            <div className="col-md-6">
            <div className='txt-inp'>
              <Form.Group controlId="companyname">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Company name"
                autoComplete="off"
                {...register("companyname",{
                  required: 'Enter Company Name.',
                  pattern: {
                    value: /^[A-Za-z, ]+$/,
                    message: 'Company name should contain only charector.'
                  }
                })}
              />
              {errors.companyname && (
                <p className="errorMsg">{errors.companyname.message}</p>
              )}
            </Form.Group>
            </div>
            <div className='txt-inp'>
              <Form.Group controlId="startdate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Select Date"
                autoComplete="off"
                {...register("startdate",{
                  required: 'start date is required.',
                 
                })}
              />
              
            </Form.Group>
            </div>
            <div className='txt-inp'>
              <Form.Group controlId="enddate">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Select Date"
                autoComplete="off"
                {...register("enddate",{
                  required: 'end date is required.',
                  
                })}
              />
              
            </Form.Group>
            </div>
            <div className='txt-inp'>
              <Form.Group controlId="workreference">
              <Form.Label>Work Reference</Form.Label>
              <Form.Control
                type="text"
                placeholder="Work Reference"
                autoComplete="off"
                {...register("workreference",{
                  required: 'Work reference is required.',
                  pattern: {
                    value: /^[A-Za-z., 0-9,!@#$%^&*()]+$/,
                    message: 'work reference is  not valid'
                  }
                })}
              />
              {errors.workreference && (
                <p className="errorMsg">{errors.workreference.message}</p>
              )}
            </Form.Group>
            </div>
            <div className='txt-inp'>
              <Form.Group controlId="pan">
              <Form.Label>PAN Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter pan number"
                autoComplete="off"
                {...register("pan",{
                  required: 'PAN is required.',
                  pattern: {
                    value: /^[A-Za-z0-9]+$/,
                    message: 'Pan is not valid.'
                  }
                })}
              />
              {errors.pan && (
                <p className="errorMsg">{errors.pan.message}</p>
              )}
            </Form.Group>
            </div>
            
          
          
            </div>
            <div className="col-md-6">
            <div className='txt-inp'>
              <Form.Group controlId="aadhar">
              <Form.Label>Aadhar Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter aadhar number"
                autoComplete="off"
                {...register("aadhar",{
                  required: 'AADHAR is required.',
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'aadhar is not valid.'
                  }
                })}
              />
              {errors.aadhar && (
                <p className="errorMsg">{errors.aadhar.message}</p>
              )}
              
            </Form.Group>
            </div>
            
            <div className='txt-inp'>
              <Form.Group controlId="bankname">
              <Form.Label>Bank Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Bank Name"
                autoComplete="off"  
                {...register("bankname",{
                  required: 'Bank Name is required.',
                  pattern: {
                    value: /^[A-Za-z., 0-9,!@#$%^&*()]+$/,
                    message: 'Bank Name is not valid.'
                  }
                })}
              />
              {errors.bankname && (
                <p className="errorMsg">{errors.bankname.message}</p>
              )}
              
            </Form.Group>
            </div>
            <div className='txt-inp'>
              <Form.Group controlId="accountnumber">
              <Form.Label>Account Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Account Number"
                autoComplete="off"
                {...register("accountnumber",{
                  required: 'Account Number is required.',
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'Account Number should contain only Number.'
                  }
                })}
              />
              {errors.instagram && (
                <p className="errorMsg">{errors.instagram.message}</p>
              )}
            </Form.Group>
            </div>
            <div className='txt-inp'>
              <Form.Group controlId="ifsccode">
              <Form.Label>IFSC Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Facebook Link"
                autoComplete="off"
                {...register("ifsccode",{
                  required: 'ifsccode is required.',
                  pattern: {
                    value: /^[A-Za-z., 0-9,!@#$%^&*()]+$/,
                    message: 'ifsccode is not valid.'
                  }
                })}
              />
              {errors.ifsccode && (
                <p className="errorMsg">{errors.ifsccode.message}</p>
              )}
            </Form.Group>
            </div>
            <div className='txt-inp'>
              <Form.Group controlId="holdername">
              <Form.Label>Account Holder Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Account Holder Name"
                autoComplete="off"
                {...register("holdername",{
                  required: 'Account holder Name is required.',
                  pattern: {
                    value: /^[A-Za-z., 0-9,!@#$%^&*()]+$/,
                    message: 'Account Holder name is not valid.'
                  }
                })}
              />
              {errors.holdername && (
                <p className="errorMsg">{errors.holdername.message}</p>
              )}
            </Form.Group>
            </div>
            
            </div>
            
            </div>
            <div className='container reg-btn'> 
          <button  type="submit">
            Submit
          </button>
          </div>
            </Form>
          </div>
        </div>
  );
};

export default OfficialDetails;