import React from 'react'
import { Link } from 'react-router-dom'
import Multiselect from 'multiselect-react-dropdown';
import { useState, useEffect } from 'react';
import { getVendorCompletedOrder } from '../api';
import DataTable from 'react-data-table-component';
import Select from 'react-select';
import Form from 'react-bootstrap/Form'
import { Modal, Button } from 'react-bootstrap';
import LoadingIndicator from './External/LoadingIndicator';
import { useLocation } from 'react-router-dom';


function NewOrder() {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState([]);
  const [loading, setloading] = useState(false);
  
  const [slotrangedata, setslotrangedata] = useState([]);
  const [delmodalshow, setdelModalShow] = useState(false);
  const [selectedid, setselectedid] = useState('');
  const location = useLocation()
  const params = new URLSearchParams(location.search)

  const getPersonalData = () => {
    const id = params.get("id");
    getVendorCompletedOrder(id).then(res => {
      if (res ) {

        if (res.data === "No Rows Found") {
          setUser([])
          setloading(true);

        }
        else {
          setUser(res);
          setloading(true);
        }
      }
    })
  }
 
  useEffect(() => {
    getPersonalData();
  }, [])

  
  
  const column = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true
    },
    {
      name: "Service Name",
      selector: (row) => row.order.cart_detail.service.service_name,
      sortable: true
    },
    {
      name: "Service Charge",
      selector: (row) => row.order.cart_detail.service.service_charge,
      sortable: true
    },
    {
      name: "Service Image",
      selector: (row) => <div><img height={80} width={80} src={"http://vendor.helpforyou.in" +row.order.cart_detail.service.service_image}/></div>,
      sortable: true
    },
    {
      name: "Total Amount",
      selector: (row) => row.order.total_amount,
      sortable: true
    },
    {
      name: "Customer",
      selector: (row) => row.customer.name,
      sortable: true
    },




  ]

  return (
    <div>
      <div>
      <div className="content-body">
                    <div className="container-fluid">
                        
                          
                    </div>
                        {
                          loading === true ? <div className="container-fluid">
                            <div className="row">
                              <div className="col-12">
                                  <div className="card">
                                  <div className="card-header">
                                      <h4 className="card-title">Vendor Completed Order</h4>
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

      {/* <DeleteAvailablity
        show={delmodalshow}
        onHide={() => setdelModalShow(false)}
        deletedata={selectedid}
      // deletsubmit = {deletesubmitapi}
      /> */}


    </div >

  )
}

export default NewOrder;


