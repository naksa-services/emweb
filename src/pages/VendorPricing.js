import React from 'react'
import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react';
import { getVendorPricing } from '../api';
import DataTable from 'react-data-table-component';

function VendorPricing() {

    const [user, setUser] = useState([]);

  const getPersonalData =() =>{
    // debugger;
    getVendorPricing().then(res => {
        if(res && res.data){
            console.log(res.data);
            setUser(res.data);
        }
    })
  }

  useEffect(() => {
    getPersonalData();
  },[])
  const column =[
    {
        name:"Company Name",
        selector : (row) => row.companyname,
        sortable:true
      },
      {
        name:"Start Date",
        selector : (row) => row.startdate,
        sortable:true
      },
      {
        name:"End Date",
        selector : (row) => row.enddate,
        sortable:true
      },
      {
        name:"Work Reference",
        selector : (row) => row.workreference,
        sortable:true
      },
      
      
      
      
  ]

    return (
        <div>
            <div>
                <div className="content-body">
                    <div className="container-fluid">
                        {/* <div className="row page-titles mx-0">
                            <div className="col-sm-6 p-md-0">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                                    <li className="breadcrumb-item active"><a href="javascript:void(0)">Personal Details</a></li>
                                </ol>
                            </div>
                            <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                                <button type="button" className="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#exampleModalLong">Add Portfolio</button>


                            </div>
                        </div> */}

                        <div className="modal fade" id="exampleModalLong">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Add Portfolio</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal">
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="mb-3">
                                                <input type="text" className="form-control input-default " placeholder="Enter Name" />
                                            </div>
                                           
                                            <div className="mb-3">
                                                <input type="text" className="form-control input-default " placeholder="Enter Email" />
                                            </div>
                                            <div className="mb-3">
                                                <input type="text" className="form-control input-default " placeholder="Enter Address" />
                                            </div>
                                            <div className="mb-3">
                                                <input type="text" className="form-control input-default " placeholder="Enter City" />
                                            </div>
                                            <div className="mb-3">
                                                <input type="text" className="form-control input-default " placeholder="Enter District" />
                                            </div>
                                            <div className="mb-3">
                                                <input type="text" className="form-control input-default " placeholder="Enter state" />
                                            </div>
                                            <div className="mb-3">
                                                <input type="text/number" className="form-control input-default " placeholder="Enter Pincode" />
                                            </div>
                                            <div className="mb-3">
                                            <select name="gender" className="form-control input-default ">
                                                <option value="none" selected>Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">other</option>
                                            </select>
                                            </div>
                                            <div className="mb-3">
                                                <input type="date" className="form-control input-default " placeholder="Enter Date of Birth" />
                                            </div>

                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger light" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary" style={{background:'#e3e730' ,border:'none'}}>Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Experience Details</h4>
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
                    </div>
                </div>

                
        </div >

    )
}

export default VendorPricing;