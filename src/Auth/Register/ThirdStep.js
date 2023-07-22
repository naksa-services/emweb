import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import {City, Country, State} from 'country-state-city';
import axios from 'axios';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { VendorOtherDTL } from '../../api';
import Multiselect from 'multiselect-react-dropdown';
// import { BASE_API_URL } from '../utils/constants';

const ThirdStep = (props) => {
  const navigate = useNavigate();
  const { user } = props;
  const { register, handleSubmit, formState: {errors} } = useForm({
    defaultValues: {
      user_email: user.user_email,
      user_password: user.user_password
    }
  });
  const onSubmitVendorOtRDEtaila = (body) => {
    VendorOtherDTL({...body}).then(res => {
      console.log(res);
      if(res && res.status && res.data==="inserted"){
        console.log("Inserted Successfully");
        props.updateUser(body);
      navigate('/fourth');
      }
      else{
        console.log("not  inserted successfully");
      }
    })
  }
  const SubmitOtherDetails =(data) => {
    const vidPin = sessionStorage.getItem("vid");
    let body ={
      onboard:data.onboard,
      interviewtime:data.interviewtime,
      mainsourcebusiness:data.mainsourcebusiness,
      workinghour:selectedhour,
      hearaboutus:data.hearaboutus,
      anyotherplatform:data.anyotherplatform,
      primaryskills:selectedSkills.toString(),
      allskills:selectedAllSkills.toString(),
      instagram:data.instagram,
      facebook:data.facebook,
      linkedin:data.linkedin,
      youtube:data.youtube,
      website:data.website,
      minimumincome:data.minimumincome,
      maximumincome:data.maximumincome,
	    vid:vidPin
    }
    onSubmitVendorOtRDEtaila(body);
  }
  
  const onSubmit = (data) => {
    console.log(data);
    SubmitOtherDetails(data);
    
  };
  const skills = [
   'Interior Desginer', 'Architecture', 'Builder', 'Constrution'
  ];
 
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedAllOption, setSelectedAllOption] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState('');
  const [selectedAllSkills, setSelectedAllSkills] = useState('');
 
  // handle onChange event of the dropdown
  const handleChange = e => {
    // debugger;
    setSelectedOption(e);
    // console.log(e);
    let arr = [] ;
    e.map((item) => {
        // console.log(item.label);
     (setSelectedOption(arr.push(item.label)))});
     console.log(arr);   
  }
  const handleAllChange = e => {
    setSelectedAllOption(e);
    e.map((item) => (setSelectedOption(setSelectedAllSkills(item.label.toString()))));
  }
  const [selectedhour, setSelectedHour] = useState('');
  
  return (
    <div className='col-md-8 offset-md-2'>
        <div className='cnt-style '>
          <div className='text-center container'>
          <h5>Other Details</h5>
          <hr />
          </div>
          
          <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
          <div className='row'>
            <div className="col-md-6">
            <div className='txt-inp'>
              <Form.Group controlId="onboard">
              <Form.Label>Why should we onboard you?</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter details."
                autoComplete="off"
                {...register("onboard",{
                  required: 'Enter details.',
                  pattern: {
                    value: /^[A-Za-z., 0-9,!@#$%^&*()]+$/,
                    message: 'Heigher Qualification should contain only charector.'
                  }
                })}
              />
              {errors.onboard && (
                <p className="errorMsg">{errors.onboard.message}</p>
              )}
            </Form.Group>
            </div>
            <div className='txt-inp'>
              <Form.Group controlId="interviewtime">
              <Form.Label>Interview Time</Form.Label>
              <Form.Control
                type="time"
                placeholder="Interview time"
                autoComplete="off"
                {...register("interviewtime",{
                  required: 'interviewtime is required.',
                  
                })}
              />
             
            </Form.Group>
            </div>
            <div className='txt-inp'>
              <Form.Group controlId="mainsourcebusiness">
              <Form.Label>Main Source Of Business</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter main source of business"
                autoComplete="off"
                {...register("mainsourcebusiness",{
                  required: 'Details is required.',
                  pattern: {
                    value: /^[A-Za-z., 0-9,!@#$%^&*()]+$/,
                    message: 'It should contain only Number.'
                  }
                })}
              />
              {errors.mainsourcebusiness && (
                <p className="errorMsg">{errors.mainsourcebusiness.message}</p>
              )}
            </Form.Group>
            </div>
            <div className='txt-inp'>
              <Form.Group controlId="workinghour">
              <Form.Label>Working Hour</Form.Label>
              <Form.Select value={selectedhour} onChange={(e) => setSelectedHour(e.target.value)} name='gender' aria-label="Default select example">
                <option>Select Working Hour</option>
                <option value="03:00 hour">03:00 hour</option>
                <option value="04:00 hour">04:00 hour</option>
                <option value="05:00 hour">05:00 hour</option>
                <option value="06:00 hour">06:00 hour</option>
                <option value="07:00 hour">07:00 hour</option>
                <option value="08:00 hour">08:00 hour</option>
                <option value="09:00 hour">09:00 hour</option>
                <option value="10:00 hour">10:00 hour</option>
              </Form.Select>
              {errors.enddate && (
                <p className="errorMsg">{errors.enddate.message}</p>
              )}
            </Form.Group>
            </div>
            <div className='txt-inp'>
              <Form.Group controlId="hearaboutus">
              <Form.Label>How did you hear about us?</Form.Label>
              <Form.Control
                type="text"
                placeholder="details here"
                autoComplete="off"
                {...register("hearaboutus",{
                  required: 'It is required.',
                  pattern: {
                    value: /^[A-Za-z., 0-9,!@#$%^&*()]+$/,
                    message: 'This is not valid.'
                  }
                })}
              />
              {errors.hearaboutus && (
                <p className="errorMsg">{errors.hearaboutus.message}</p>
              )}
            </Form.Group>
            </div>
            <div className='txt-inp'>
              <Form.Group controlId="anyotherplatform">
              <Form.Label>Any other platform you working on ?</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter details here"
                autoComplete="off"
                {...register("anyotherplatform",{
                  required: 'It is required.',
                  pattern: {
                    value: /^[A-Za-z., 0-9,!@#$%^&*()]+$/,
                    message: 'This is not valid.'
                  }
                })}
              />
              {errors.anyotherplatform && (
                <p className="errorMsg">{errors.anyotherplatform.message}</p>
              )}
              
            </Form.Group>
            </div>
            <div className='txt-inp'>
              <Form.Group controlId="minimumincome">
              <Form.Label>Minimum Inncome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter minimumincome"
                autoComplete="off"
                {...register("minimumincome",{
                  required: 'minimumincome is required.',
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'price should contain only Number.'
                  }
                })}
              />
              {errors.minimumincome && (
                <p className="errorMsg">{errors.minimumincome.message}</p>
              )}
            </Form.Group>
            </div>
          
          
            </div>
            <div className="col-md-6">
            <div className='txt-inp'>
              <Form.Group controlId="primaryskills">
              <Form.Label>Primary Skills</Form.Label>

              <Multiselect
              placeholder='Select Primary Skills'
                                            isObject={false}
                                            onRemove={(event)=>{console.log(event)}}
                                            onSelect={(event)=>{ setSelectedSkills(event)}}
                                            options={skills}
                                            showCheckbox
                                        />
              {/* <Select
                isMulti
                placeholder="Select Primary Skills"
                value={selectedOption} // set selected value
                options={skills} // set list of the data
                onChange={handleChange} // assign onChange function
              /> */}
              
            </Form.Group>
            </div>
            
            <div className='txt-inp'>
              <Form.Group controlId="allskills">
              <Form.Label>Select  All Skills</Form.Label>
              <Multiselect
              placeholder='Select All Skills'
                                            isObject={false}
                                            onRemove={(event)=>{console.log(event)}}
                                            onSelect={(event)=>{ setSelectedAllSkills(event)}}
                                            options={skills}
                                            showCheckbox
                                        />
              {/* <Select
                isMulti
                placeholder="Select All Skills"
                value={selectedAllOption} // set selected value
                options={skills} // set list of the data
                onChange={handleAllChange} // assign onChange function
              /> */}
              
            </Form.Group>
            </div>
            <div className='txt-inp'>
              <Form.Group controlId="instagram">
              <Form.Label>Instagram link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Instagram Link"
                autoComplete="off"
                {...register("instagram",{
                  required: 'price is required.',
                  pattern: {
                    value: /^[A-Za-z., 0-9,!@#$%^&*()-_?/><:;]+$/,
                    message: 'price should contain only Number.'
                  }
                })}
              />
              {errors.instagram && (
                <p className="errorMsg">{errors.instagram.message}</p>
              )}
            </Form.Group>
            </div>
            <div className='txt-inp'>
              <Form.Group controlId="facebook">
              <Form.Label>Facebook link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Facebook Link"
                autoComplete="off"
                {...register("facebook",{
                  required: 'facebook is required.',
                  pattern: {
                    value: /^[A-Za-z., 0-9,!@#$%^&*()-_?/><:;]+$/,
                    message: 'price should contain only Number.'
                  }
                })}
              />
              {errors.instagram && (
                <p className="errorMsg">{errors.instagram.message}</p>
              )}
            </Form.Group>
            </div>
            <div className='txt-inp'>
              <Form.Group controlId="linkedin">
              <Form.Label>Linkedin link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Linkedin Link"
                autoComplete="off"
                {...register("linkedin",{
                  required: 'Linkedin is required.',
                  pattern: {
                    value: /^[A-Za-z., 0-9,!@#$%^&*()-_?/><:;]+$/,
                    message: 'price should contain only Number.'
                  }
                })}
              />
              {errors.linkedin && (
                <p className="errorMsg">{errors.linkedin.message}</p>
              )}
            </Form.Group>
            </div>
            <div className='txt-inp'>
              <Form.Group controlId="youtube">
              <Form.Label>Youtube link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Youtube Link"
                autoComplete="off"
                {...register("youtube",{
                  required: 'youtube is required.',
                  pattern: {
                    value: /^[A-Za-z., 0-9,!@#$%^&*()-_?/><:;]+$/,
                    message: 'price should contain only Number.'
                  }
                })}
              />
              {errors.youtube && (
                <p className="errorMsg">{errors.youtube.message}</p>
              )}
            </Form.Group>
            </div>
            
            
            <div className='txt-inp'>
              <Form.Group controlId="maximumincome">
              <Form.Label>Maximum income</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter maximumincome"
                autoComplete="off"
                {...register("maximumincome",{
                  required: 'price is required.',
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'maximumincome should contain only Number.'
                  }
                })}
              />
              {errors.maximumincome && (
                <p className="errorMsg">{errors.maximumincome.message}</p>
              )}
            </Form.Group>
            </div>
            </div>
            <div className='txt-inp'>
              <Form.Group controlId="website">
              <Form.Label>Website link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Website Link"
                autoComplete="off"
                {...register("website",{
                  required: 'website is required.',
                  pattern: {
                    value: /^[A-Za-z., 0-9,!@#$%^&*()-_?/><:;]+$/,
                    message: 'price should contain only Number.'
                  }
                })}
              />
              {errors.website && (
                <p className="errorMsg">{errors.website.message}</p>
              )}
            </Form.Group>
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

export default ThirdStep;