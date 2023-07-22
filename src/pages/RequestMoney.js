import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap';

import { useState, useEffect } from 'react';
import { getRequestMoney, postRequestMoney } from '../api';
import DataTable from 'react-data-table-component';
import Table from 'react-bootstrap/Table';

import AlertMessage from './constants/messagealert';
import LoadingIndicator from './External/LoadingIndicator';

function RequestMoney() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)

  const [user, setUser] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setloading] = useState(false);
  const [errmessage, seterrmessage] = useState('');
  const [errmessagetype, seterrmessagetype] = useState('')
  const [alert, setalert] = useState(false);
  const [state, setState] = useState({
    amount: "",
    notes: "",
  });

  const getPersonalData = () => {
    getRequestMoney().then(res => {
      if (res) {
        console.log(res);
        setloading(true);
        setUser(res);
      }
    })
  }

  useEffect(() => {
    getPersonalData();
  }, [])
  const column = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true
    },
    {
      name: "Franchieser_Id",
      selector: (row) => row.franchiser,
      sortable: true
    },
    {
      name: "RequestedAmount",
      selector: (row) => row.amount,
      sortable: true
    },
    {
      name: "Notes",
      selector: (row) => row.notes,
      sortable: true
    },



  ]


  const addNewData = () => {
    setShow(true);
    setedit(null);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };




  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Hello')
    const data = {
      requested_amount: parseInt(state.amount),
      notes: state.notes,
      franchieser_id
        : sessionStorage.getItem('fid')
    }
    console.log(data)

    postRequestMoney(data).then((res) => {
      if (res.status === true && res) {
        setShow(false);
        setalert(true);
        seterrmessagetype('success');
        seterrmessage(`Added Successfully`)
        getPersonalData();

      }
      else if (res.status === false && res) {
        setShow(false);
        setalert(true);
        seterrmessagetype('failure');
        seterrmessage(`Something went wrong, Please tray again...`)
        getPersonalData();
      }
    })
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
                      <h4 className="card-title">Request Money</h4>
                      <Button variant='success' onClick={() => addNewData()}
                        style={{ background: '#b11c26', border: 'none' }}>ADD NEW</Button>
                      <Modal show={show} onHide={() => setShow(false)}>
                        <Modal.Header closeButton>
                          <Modal.Title>ADD || RequestMoney
                            Type</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <form>

                            <div className="mb-3">
                              <label>RequestedAmount</label>
                              <input type="text" className="form-control input-default"
                                name='amount' value={state.amount} onChange={handleInputChange}
                                placeholder='Enter amount...' />
                            </div>
                            <div className="mb-3">
                              <label>Notes</label>
                              <input type="text" className="form-control input-default"
                                name='notes' value={state.notes} onChange={handleInputChange}
                                placeholder='Enter notes...' />
                            </div>
                          </form>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={() => setShow(false)}  >
                            Close
                          </Button>
                          <Button variant="primary" onClick={handleSubmit} className='allBtn'
                            style={{ background: '#b11c26', border: 'none' }}>
                            Save Changes
                          </Button>


                        </Modal.Footer>
                      </Modal>
                    </div>

                    <div className="card-body">
                      <DataTable columns={column}
                        data={user}
                        pagination
                        fixedHeader
                        fixedHeaderScrollHeight='500px'
                        highlightOnHover

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

export default RequestMoney;