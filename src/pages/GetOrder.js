import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useState, useEffect } from 'react';
import { getCustomerOrder } from '../api';
import DataTable from 'react-data-table-component';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { set } from 'react-hook-form';
import AlertMessage from './constants/messagealert';
import reactSelect from 'react-select';
import LoadingIndicator from './External/LoadingIndicator';
function GetOrder() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  // const search = useLocation().search;
  // const vendorid = new URLSearchParams(search).get('id');
  const [user, setUser] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setloading] = useState(false);
  const [errmessage, seterrmessage] = useState('');
  const [errmessagetype, seterrmessagetype] = useState('')
  const [alert, setalert] = useState(false);
  const [state, setState] = useState({
    orderid: "",
    userid: "",
    vid: "",
    orderfor: "",
    videocall: "",
    createdat: "",
    orderstatus :"",
    customerstatus: "",
    waittime: "",
    completecalltime:"",
    callingamount:"",
    name:"",
    photo:"",
    audicallprice:"",
    videocallprice:"",
    chatprice:"",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        orderid: state.orderid,
        userid : state.userid,
        vid : state.vid,
        orderfor: state.orderfor,
        videocall: state.videcall,
        createdat: state.createdat,
        orderstatus: state.orderstatus,
        customerstatus: state.customerstatus,
        waittime: state.waittime,
        completecalltime: state.completecalltime,
        callingamount: state. callingamount,
        name: state.  name,
        photo: state.photo,
        audicallprice: state.audicallprice,
        videocallprice: state.videocallprice,
        chatprice: state.chatprice,
        
    }
    // UpsertGetOrder(data).then((res) => {
    //   if (res.status === true && res) {
    //     setShow(false);
    //     setalert(true);
    //     seterrmessagetype('success');
    //     seterrmessage(`${res.data} Successfully`)
    //     getPersonalData();

    //   }
    //   else if (res.status === false && res) {
    //     setShow(false);
    //     setalert(true);
    //     seterrmessagetype('failure');
    //     seterrmessage(`Something went wrong, Please tray again..`)
    //     getPersonalData();
    //   }
    // })
  };
  const getPersonalData = () => {
    // debugger;
    const id = params.get("id");
    getCustomerOrder(id).then(res => {
      console.log(id)
      if (res && res.data === "No Rows Found") {
        setUser([])
        setloading(true);
      }
      else {

        setUser(res.data);
        setloading(true);

      }
    })
  }

  useEffect(() => {
    getPersonalData();
  }, [])
  const column = [
    {
      name: "OrderId",
      selector: (row) => row.orderid,
      sortable: true
    },
    {
      name: "UserId",
      selector: (row) => row.userid,
      sortable: true
    },
    {
      name: "Vid",
      selector: (row) => row.vid,
      sortable: true
    },
    {
      name: "OrderFor",
      selector: (row) => row.orderfor,
      sortable: true
    },
    {
      name: "Video-call",
      selector: (row) => row.videocall,
      sortable: true
    },
    {
      name: "Create-Date",
      selector: (row) => row.createdat,
      sortable: true
    },
    {
        name: "OrderStatus",
        selector: (row) => row.orderstatus,
        sortable: true
      },
      {
        name: "CustomerStatus",
        selector: (row) => row.customerstatus,
        sortable: true
      },
      {
        name: "waittime",
        selector: (row) => row.waittime,
        sortable: true
      },
      {
        name: "CompleteCalltime",
        selector: (row) => row.completecalltime,
        sortable: true
      },
      {
        name: "CallingAmount",
        selector: (row) => row.callingamount,
        sortable: true
      },
      {
        name: "Name",
        selector: (row) => <p onClick={() => (row)}>{row.name}</p>,
        sortable: true
      },
      {
        name: "Image",
        selector: (row) => <img height={"80px"} width={"80px"}
         src={"https://naksa.org/vendor-image/"+row.photo} alt="" />,

        sortable: true
      },
      {
        name: "Audicallprice",
        selector: (row) => row.audicallprice,
        sortable: true
      },
      {
        name: "Videocallprice",
        selector: (row) => row.videocallprice,
        sortable: true
      },
      {
        name: "Chatprice",
        selector: (row) => row.chatprice,
        sortable: true
      },
      


  ]
  const editDataform = () => {
    setShow(true);
    state.aadhar = user[0].aadhar;
    state.pan = user[0].pan;
    state.holdername = user[0].holdername;
    state.accountnumber = user[0].accountnumber;
    state.bankname = user[0].bankname;
    state.ifsccode = user[0].ifsccode
  }

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
            loading === true ? <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card">

                    <div className="card-header">
                      <h4 className="card-title">GetCustomerOrder</h4>
                      {/* <Button variant="primary" onClick={() => editDataform()}>
                        Edit
                      </Button> */}
                      {/* <Modal show={show} onHide={() => setShow(false)}>
                        <Modal.Header closeButton>
                          <Modal.Title>Modify Your Account Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body> */}
                          {/* <form>
                            <div className="mb-3">
                              <input type="text" className="form-control input-default " name='pan' value={state.pan} onChange={handleInputChange} placeholder="Enter Your Pan Number" />
                            </div>

                            <div className="mb-3">
                              <input type="text" className="form-control input-default " name='aadhar' value={state.aadhar} onChange={handleInputChange} placeholder="Entet Adhar Number" />
                            </div>
                            <div className="mb-3">
                              <input type="text" className="form-control input-default " name='holdername' value={state.holdername} onChange={handleInputChange} placeholder="Enter Account Holder Name" />
                            </div>
                            <div className="mb-3">
                              <input type="text" className="form-control input-default " name='bankname' value={state.bankname} onChange={handleInputChange} placeholder="Enter Bank Name" />
                            </div>
                            <div className="mb-3">
                              <input type="text" className="form-control input-default " name='accountnumber' value={state.accountnumber} onChange={handleInputChange} placeholder="Enter Account Number" />
                            </div>
                            <div className="mb-3">
                              <input type="text" className="form-control input-default " name='ifsccode' value={state.ifsccode} onChange={handleInputChange} placeholder="Enter IFSC" />
                            </div>
                          </form> */}
                        {/* </Modal.Body>
                        {/* <Modal.Footer>
                          <Button variant="secondary" onClick={() => setShow(false)}>
                            Close
                          </Button>
                          <Button variant="primary" onClick={handleSubmit}>
                            Save Changes
                          </Button>
                        </Modal.Footer> */}
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
              : <div><LoadingIndicator /></div>
          }
        </div>
      </div>


    </div >

  )
}

export default GetOrder;