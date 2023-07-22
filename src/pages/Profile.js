import React from "react";
import { Link } from 'react-router-dom';
import { useEffect, useRef } from "react";
import { useState } from "react";
import { getFrenchiser, BasicDetail, BankDetail } from "../api";
import LoadingIndicator from "./External/LoadingIndicator";
import AlertMessage from "./constants/messagealert";

function Profile() {
  const initialValues = { address: "", qualification: "", age: "", gender: "", email: "", amount: "", no_of_vender: "", latitude: "gjhv", longitude: "bhjb", notification_id: "bjk", user: sessionStorage.getItem("fid"), aadhar_card: "", pan_card: "", account_number: "", ifsc_code: "", account_holder: "", bank_name: "", branch: "", };
  const [formValues, setformValues] = useState(initialValues);
  const [formErrors, setformErros] = useState({});
  const [fsubmit, fissubmit] = useState(false);
  const [errmessage, seterrmessage] = useState('');
  const [errmessagetype, seterrmessagetype] = useState('')
  const [alert, setalert] = useState(false);
  const formRef = useRef();
  const [user, setUser] = useState([]);
  const [loading, setloading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
    // console.log(formValues);
  }
  const BasicFunc = (e) => {
    e.preventDefault();
    // setformErros(validate(formValues));
    fissubmit(true);
    basic(formValues)

  }

  const basic = (body) => {
    BasicDetail(body)
      .then(res => {
        if (res && res.result === "Success") {
          setalert(true);
          seterrmessagetype('success');
          seterrmessage(`Updated Successfully`)
          // naviagte('/banksdetails')
          console.log(res);
        }
        else {
          setalert(true);
          seterrmessagetype('failure');
          seterrmessage(`Something went wrong!, please try again`)
        }
      })
  }

  const BankFunc = (e) => {
    e.preventDefault();
    // setformErros(validate(formValues));
    fissubmit(true);

    bank(formValues);

  }
  const bank = (body) => {
    BankDetail(body)
      .then(res => {
        if (res && res.result === "Success") {
          // navigate('/login')
          setalert(true);
          seterrmessagetype('success');
          seterrmessage(`Updated Successfully`)
          console.log(res);
        }
        else{
          setalert(true);
          seterrmessagetype('failure');
          seterrmessage(`Something went wrong!, please try again`)
        }
      })
  }

  const getPersonalData = () => {
    getFrenchiser().then(res => {
      if (res) {
        console.log(res);
        setloading(true);
        setUser(res);
        formValues.aadhar_card = res.aadhar_card;
        formValues.account_holder = res.account_holder;
        formValues.account_number = res.account_number;
        formValues.address = res.address;
        formValues.age = res.age;
        formValues.amount = res.amount;
        formValues.bank_name = res.bank_name;
        formValues.branch = res.branch;
        formValues.email = res.email;
        formValues.gender = res.gender;
        formValues.ifsc_code = res.ifsc_code;
        formValues.no_of_vender = res.no_of_vender;
        formValues.pan_card = res.no_of_vender;
        formValues.qualification = res.qualification;

      }
    })
  }

  useEffect(() => {
    getPersonalData();
  }, [])
  return (
    <div>
      {
        loading === true ? <div>
          <div className="content-body">
            <div className="container-fluid">
            <AlertMessage
              show={alert}
              onhide={() => setalert(false)}
              data={errmessagetype}
              message={errmessage}
            />
              <div class="row d-flex justify-content-center">
                <div class="col-md-7">
                  <div class="card p-3 py-4">
                    <div class="text-center">
                      <img
                        src={"http://vendor.helpforyou.in" + user.image}
                        width="150"
                        height="150"
                        class="rounded-circle"
                      />
                    </div>

                    <div class="text-center mt-3">

                      <h5 class="mt-2 mb-0">{user.user.name}</h5>
                      <span>Frenchiser</span>
                      {/* <h6>{sessionStorage.getItem("phone")}</h6> */}



                    </div>
                    <button className="btn btn-danger" style={{ background: '#b11c26' }}>Edit Profile Pic</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-body">
            <div className="container-fluid">
              <div class="row d-flex justify-content-center">
                <div class="col-md-12 bank">
                  <div className="row">
                    <div className="col-sm-6 ">
                      <h4 style={{ textAlign: 'center', paddingTop: '30px' }}>BASIC  DETAILS UPDATE
                      </h4>
                      <div className="form-group">
                        <label className="mb-1"><strong>Address :</strong></label>
                        <input type="text" name='address' value={formValues.address}
                          onChange={handleChange} className="form-control"
                          placeholder='Enter Address' />
                      </div>
                      <p style={{ color: "red" }}>{formErrors.address}</p>
                      <div className="form-group">
                        <label className="mb-1"><strong>Qualification :</strong></label>
                        <input type="text" name='qualification'
                          value={formValues.qualification} onChange={handleChange}
                          className="form-control" placeholder='Enter Qualification' />
                      </div>
                      <p style={{ color: "red" }}>{formErrors.qualification}</p>

                      <div className="form-group">
                        <label className="mb-1"><strong>Age :</strong></label>
                        <input type="text" name='age'
                          value={formValues.age} onChange={handleChange}
                          className="form-control" placeholder='Enter age ... ' />
                      </div>
                      <p style={{ color: "red" }}>{formErrors.age}</p>
                      <div className="form-group">
                        <label className="mb-1"><strong>Gender	:</strong></label>
                        <input type="text" name='gender'
                          value={formValues.gender} onChange={handleChange}
                          className="form-control" placeholder='Enter gender ... ' />
                      </div>
                      <p style={{ color: "red" }}>{formErrors.gender}</p>
                      <div className="form-group">
                        <label className="mb-1"><strong>Email :</strong></label>
                        <input type="email" name='email'
                          value={formValues.email} onChange={handleChange}
                          className="form-control" placeholder='Enter email ...' />
                      </div>
                      <p style={{ color: "red" }}>{formErrors.email}</p>
                      <div className="form-group">
                        <label className="mb-1"><strong>Amount	:</strong></label>
                        <input type="text" name='amount'
                          value={formValues.amount} onChange={handleChange}
                          className="form-control" placeholder='Enter amount ...' />
                      </div>
                      <p style={{ color: "red" }}>{formErrors.amount}</p>
                      <div className="form-group">
                                                <label className="mb-1"><strong>No_OF_Vender :</strong></label>
                                                <input type="text"  name='no_of_vender'
                                                 value={formValues.no_of_vender} onChange={handleChange} 
                                                 className="form-control" placeholder='Enter no_of_vender ... ' />
                                            </div>
                                            <p style={{color:"red"}}>{formErrors.no_of_vender}</p>
                                            <div className="form-row d-flex justify-content-between 
                                            mt-4 mb-2">
                                               
                                            </div>
                      <div className="text-center">
                        <button type="button" onClick={BasicFunc}
                          className="btn btn-primary btn-block" style={{ background: '#b11c26', border: '1px solid #b11c26' }}>Submit</button>
                      </div>                    </div>



                    <div className="col-sm-6">
                      <h4 style={{ textAlign: 'center', paddingTop: '30px' }}>BANK  DETAILS UPDATE
                      </h4>
                      <div className="form-group">
                        <label className="mb-1"><strong>Aadhar_Card :</strong></label>
                        <input type="text" name='aadhar_card' value={formValues.aadhar_card}
                          onChange={handleChange} className="form-control"
                          placeholder='Enter aadhar_card_no ...' />
                      </div>
                      <p style={{ color: "red" }}>{formErrors.aadhar_card}</p>
                      <div className="form-group">
                        <label className="mb-1"><strong>Pan_Card :</strong></label>
                        <input type="text" name='pan_card'
                          value={formValues.pan_card} onChange={handleChange}
                          className="form-control" placeholder='Enter pan_card ... ' />
                      </div>

                      <p style={{ color: "red" }}>{formErrors.pan_card}</p>
                      <div className="form-group">
                        <label className="mb-1"><strong>Account_Number	:</strong></label>
                        <input type="text" name='account_number'
                          value={formValues.account_number} onChange={handleChange}
                          className="form-control" placeholder='Enter account_number ... ' />
                      </div>
                      {/* <p style={{color:"red"}}>{formErrors.account_no}</p> */}

                      <div className="form-group">
                        <label className="mb-1"><strong>IFSC_Code</strong></label>
                        <input type="text" name='ifsc_code'
                          value={formValues.ifsc_code} onChange={handleChange}
                          className="form-control" placeholder='Enter ifsc_code ... ' />
                      </div>

                      <p style={{ color: "red" }}>{formErrors.ifsc_code}</p>

                      <div className="form-group">
                        <label className="mb-1"><strong>Account_Holder :		</strong></label>
                        <input type="text" name='account_holder'
                          value={formValues.account_holder} onChange={handleChange}
                          className="form-control" placeholder='Enter account_holder ... ' />
                      </div>
                      <p style={{ color: "red" }}>{formErrors.account_holder}</p>

                      <div className="form-group">
                        <label className="mb-1"><strong>Bank_Name	</strong></label>
                        <input type="text" name='bank_name'
                          value={formValues.bank_name} onChange={handleChange}
                          className="form-control" placeholder='Enter bankname ... ' />
                      </div>
                      <p style={{ color: "red" }}>{formErrors.bank_name}</p>

                      <div className="form-group">
                        <label className="mb-1"><strong>Branch	</strong></label>
                        <input type="text" name='branch'
                          value={formValues.branch} onChange={handleChange}
                          className="form-control" placeholder='Enter  branch ' />
                      </div>
                      <p style={{ color: "red" }}>{formErrors.branch}</p>
                      <div className="form-row d-flex justify-content-between 
                                            mt-4 mb-2">

                      </div>
                      <div className="text-center">
                        <button type="button" onClick={BankFunc}
                          className="btn btn-primary btn-block" style={{ background: '#b11c26', border: '1px solid #b11c26' }}>Submit</button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> : <LoadingIndicator />
      }
    </div>


  );
}

export default Profile;
