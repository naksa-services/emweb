import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { useState } from 'react';
import { VendorEDDetails, VendorOFCDTL } from '../../api';
import Multiselect from 'multiselect-react-dropdown';
const SecondStep = (props) => {
    const [selectedlangaug, setSelectedlangauge] = useState('');
  const { user } = props;
const { register, handleSubmit, formState: {errors} } = useForm({
  defaultValues: {
    user_email: user.user_email,
    user_password: user.user_password
  }
});

  const OnSubmitEDData=(data)=> {
    debugger;
    VendorEDDetails({...data}).then(res => {
      console.log(res);
      if(res && res.status && res.data==="inserted"){
        console.log("Inserted Successfully");
      }
      else{
        console.log("not  inserted successfully");
      }
    })
  }
  const OnsubmitOFCLData= (mdata) => {
    debugger;
    VendorOFCDTL({...mdata}).then(out => {
      console.log(out);
      if(out && out.status === true){
        console.log("Inserted Successfully");
        
        props.updateUser(mdata);
        navigate('/third');
      }
      else{
        console.log("not  inserted successfully");
      }
    })
  }

const [imageFile, setImageFile]= useState(null);
const submitEductaionDetails = (data)  => {
  const vidPin = sessionStorage.getItem("vid");
  let body ={
    hqualification:data.hqualification,
    collegename:data.collegename,
    startdate:data.startdate,
    enddate:data.enddate,
    certificationname:data.certificationname,
    vid:vidPin
  }
  OnSubmitEDData(body);
  
}

const SubmitOfclDetails =(data) => {
  const vidPin = sessionStorage.getItem("vid");
  let body = {
    aboutus:data.aboutus,
    audicallprice:data.audicallprice,
    videocallprice:data.videocallprice,
    chatprice:data.chatprice,
    language:selectedlangaug.toString(),
    vid:vidPin

  }
  console.log(body);
  OnsubmitOFCLData(body);
}
  const navigate = useNavigate();
  
  const onSubmit = (data) => {
    
    submitEductaionDetails(data);
    SubmitOfclDetails(data)
  };
  const alllanguage = [
    'Hindi','English','Urdu','Bangoli','Marathi','Kannad','Tamil','Telgu','Malayalum','Udiya','Punjabi','Konkan'
  ];
 
  const [selectedOption, setSelectedOption] = useState(null);
 
  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedOption(e.map((item) => (setSelectedOption(item.label.toString()))));
  }

  return (
    <div className='col-md-8 offset-md-2'>
        <div className='cnt-style '>
          <div className='text-center container'>
          <h5>Educational Details</h5>
          <hr />
          </div>
          
          <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
          <div className='row'>
            <div className="col-md-6">
            <div className='txt-inp'>
              <Form.Group controlId="hqualification">
              <Form.Label>Enter Qualification</Form.Label>
              <Form.Control
                type="text"
                placeholder="Heigher Qualification"
                autoComplete="off"
                {...register("hqualification",{
                  required: 'Heigher Qualification is required.',
                  pattern: {
                    value: /^[A-Za-z., 0-9,!@#$%^&*()]+$/,
                    message: 'Heigher Qualification should contain only charector.'
                  }
                })}
              />
              {errors.hqualification && (
                <p className="errorMsg">{errors.hqualification.message}</p>
              )}
            </Form.Group>
            </div>
            <div className='txt-inp'>
              <Form.Group controlId="collegename">
              <Form.Label>College Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="College Name"
                autoComplete="off"
                {...register("collegename",{
                  required: 'College name is required.',
                  pattern: {
                    value: /^[A-Za-z., 0-9,!@#$%^&*()]+$/,
                    message: 'collegename is not valid.'
                  }
                })}
              />
              {errors.collegename && (
                <p className="errorMsg">{errors.collegename.message}</p>
              )}
            </Form.Group>
            </div>
            <div className='txt-inp'>
              <Form.Group controlId="startdate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Start date"
                autoComplete="off"
                {...register("startdate",{
                  required: 'startdate is required.',
                 
                })}
              />
              
            </Form.Group>
            </div>
            <div className='txt-inp'>
              <Form.Group controlId="enddate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Start date"
                autoComplete="off"
                {...register("enddate",{
                  required: 'enddate is required.',
                  
                })}
              />
              
            </Form.Group>
            </div>
            <div className='txt-inp'>
              <Form.Group controlId="certificationname">
              <Form.Label>Certificate Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Certificate Name"
                autoComplete="off"
                {...register("certificationname",{
                  required: 'certificationname is required.',
                  pattern: {
                    value: /^[A-Za-z., 0-9,!@#$%^&*()]+$/,
                    message: 'certificationname is not valid.'
                  }
                })}
              />
              {errors.certificationname && (
                <p className="errorMsg">{errors.certificationname.message}</p>
              )}
            </Form.Group>
            </div>
            <div className='txt-inp'>
              <Form.Group controlId="cimage">
              <Form.Label>Certificate Image</Form.Label>
              <Form.Control
              {...register("cimage")}
                type="file"
                
              />
              
            </Form.Group>
            </div>
          
          
            </div>
            <div className="col-md-6">
            <div className='txt-inp'>
              <Form.Group controlId="aboutus">
              <Form.Label>About Us</Form.Label>
              <Form.Control
                type="text"
                placeholder="describe yourself."
                autoComplete="off"
                {...register("aboutus",{
                  required: 'About us is required.',
                  pattern: {
                    value: /^[A-Za-z., 0-9,!@#$%^&*()]+$/,
                    message: 'About us is not valid.'
                  }
                })}
              />
              {errors.aboutus && (
                <p className="errorMsg">{errors.aboutus.message}</p>
              )}
            </Form.Group>
            </div>
            
            <div className='txt-inp'>
              <Form.Group controlId="audicallprice">
              <Form.Label>Audio call Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="price per minute"
                autoComplete="off"
                {...register("audicallprice",{
                  required: 'price is required.',
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'price should contain only Number.'
                  }
                })}
              />
              {errors.audicallprice && (
                <p className="errorMsg">{errors.audicallprice.message}</p>
              )}
            </Form.Group>
            </div>
            <div className='txt-inp'>
              <Form.Group controlId="videocallprice">
              <Form.Label>Video call Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="price per minute"
                autoComplete="off"
                {...register("videocallprice",{
                  required: 'price is required.',
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'price should contain only Number.'
                  }
                })}
              />
              {errors.videocallprice && (
                <p className="errorMsg">{errors.videocallprice.message}</p>
              )}
            </Form.Group>
            </div>
            <div className='txt-inp'>
              <Form.Group controlId="chatprice">
              <Form.Label>Chat Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="price per minute"
                autoComplete="off"
                {...register("chatprice",{
                  required: 'price is required.',
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'price should contain only Number.'
                  }
                })}
              />
              {errors.chatprice && (
                <p className="errorMsg">{errors.chatprice.message}</p>
              )}
            </Form.Group>
            </div>
            <div className='txt-inp'>
            <Form.Group controlId="language">
              <Form.Label>Select language</Form.Label>
              <Multiselect
              placeholder='Select language'
                                            isObject={false}
                                            onRemove={(event)=>{console.log(event)}}
                                            onSelect={(event)=>{ setSelectedlangauge(event)}}
                                            options={alllanguage}
                                            showCheckbox
                                        />
              
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

export default SecondStep;