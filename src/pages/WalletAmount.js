import React from 'react'
import {useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getWalletAmount } from '../api';
import AlertMessage from './constants/messagealert';
import DataTable from 'react-data-table-component';
import {Button,Modal} from 'react-bootstrap';
import LoadingIndicator from './External/LoadingIndicator';
function WalletAmount() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)

    const [user, setUser] = useState([]);
    const [show,setShow]=useState(false);
    const [loading, setloading] = useState(false);
    const [errmessage, seterrmessage] = useState('');
    const [errmessagetype, seterrmessagetype] = useState('')
    const [alert, setalert] = useState(false);
    //it for data post
    
    
      
      
    
  const getPersonalData =() =>{
    getWalletAmount().then(res => {
      if(res){
          setUser(res);
          setloading(true);
      }
  })
  }

  useEffect(() => {
    getPersonalData();
  },[])
  const column =[
    {
        name:"Wallet Id",
        selector : (row) => row.id,
        sortable:true
      },
      {
        name:"Wallet Amount",
        selector : (row) => row.order,
        sortable:true
      },
      {
        name:"Transdate",
        selector : (row) => row.amount,
        sortable:true
      },
     
  ]
 
    return (
        <div>
            <div>
                <div className="content-body">
                    <div className="container-fluid">
                        
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
                                      <h4 className="card-title">Wallet Amount</h4>
                                      {/* <Button variant='success'onClick={()=>editDataform()} >Edit</Button>
                                      <Modal show={show} onHide={() => setShow(false)}>
                                              <Modal.Header closeButton>
                                              <Modal.Title>Modify Your Account Details</Modal.Title>
                                              </Modal.Header>
                                              <Modal.Body>
                                              <form>
                                              <div className="mb-3">
                                                  <label>Qualification</label>
                                                  <input type="text" className="form-control input-default "name='hqualification' value={state.hqualification} onChange={handleInputChange} placeholder="Enter High Qualification" />
                                              </div>
                                            
                                              <div className="mb-3">
                                                  <label>College name</label>
                                                  <input type="text" className="form-control input-default " name='collegename' value={state.collegename}onChange={handleInputChange} placeholder="Entet College Name" />
                                              </div>
                                              <div className="mb-3">
                                                  <label>Start date</label>
                                                  <input type="date" className="form-control input-default " name='startdate' value={state.startdate}onChange={handleInputChange} placeholder="Enter Start Date" />
                                              </div>
                                              <div className="mb-3">
                                                  <label>End date</label>
                                                  <input type="date" className="form-control input-default " name='enddate' value={state.enddate}onChange={handleInputChange} placeholder="Enter End Date" />
                                              </div>
                                              <div className="mb-3">
                                                  <label>Certification name</label>
                                                  <input type="text" className="form-control input-default " name='certificationname' value={state.certificationname}onChange={handleInputChange} placeholder="Enter Certification Name" />
                                              </div>
                                              
                                          </form>
                                              </Modal.Body>
                                              <Modal.Footer>
                                              <Button variant="secondary" onClick={()=>setShow(false)}>
                                                  Close
                                              </Button>
                                              <Button variant="primary" onClick={handleSubmit}>
                                                  Save Changes
                                              </Button>
                                              </Modal.Footer>
                                          </Modal> */}
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
                            : <div> <LoadingIndicator/></div>
                        }
                        </div>
                   
                   
            </div>
        </div >

    )
}

export default WalletAmount;