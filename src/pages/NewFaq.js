import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useState, useEffect } from 'react';
import { GetFAQ,FaqPost,DeleteFaq} from '../api';
import DataTable from 'react-data-table-component';
import {Button,Modal} from 'react-bootstrap';

import { set } from 'react-hook-form';
import AlertMessage from './constants/messagealert';
import LoadingIndicator from './External/LoadingIndicator';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
function NewFAQ({route}) {
const state_location = useLocation();
    const [user, setUser] = useState([]);
    const [show,setShow]=useState(false);
    const [loading, setloading] = useState(false);
    const [errmessage, seterrmessage] = useState('');
    const [errmessagetype, seterrmessagetype] = useState('')
    const [alert, setalert] = useState(false);
    const [edit, setedit] = useState([]);
    const search = useLocation().search;
    const faqid = new URLSearchParams(search).get('fid');
    
   
    const [open, setOpen] =useState(false);
    // Form posting 
    const [state, setState] = useState({
        faqname:"",
        faqdesc: "",
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
          id:edit,
          faqtypeid:faqid,
            faqname:state.faqname,
            faqdesc:state.faqdesc,
            transdate:new Date()
            
        }
        
        FaqPost(data).then((res) => {
          if(res.sts === true && res){
            setShow(false);
            setalert(true);
            seterrmessagetype('success');
            seterrmessage(`${res.data} Successfully`)
            getPersonalData();
            
          }
          else if(res.sts === false && res){
            setShow(false);
            setalert(true);
            seterrmessagetype('failure');
            seterrmessage(`Something went wrong, Please tray again..`)
            getPersonalData();
          }
        })
      };

  const DeleteFaqname = (id) =>{
    DeleteFaq(id).then((res) => {
      if(res.sts === true && res){
        setShow(false);
        setalert(true);
        seterrmessagetype('success');
        seterrmessage(`${res.data} Successfully`)
        getPersonalData();
        
      }
      else if(res.sts === false && res){
        setShow(false);
        setalert(true);
        seterrmessagetype('failure');
        seterrmessage(`Something went wrong, Please tray again..`)
        getPersonalData();
      }
    })

  }

  const getPersonalData =() =>{
    
    GetFAQ(faqid).then(res => {
        if(res && res.data){
            console.log(res.data);

            setUser(res.data);
            setloading(true);
            
        }
    })
  }

  
  const editFAQType= (row) =>{

    setShow(true);
    setedit(row.id);
    state.faqname=row.faqname;
    state.faqdesc = row.faqdesc;
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getPersonalData();
  },[])
  const column =[
    {
        name:"FAQ Type ID",
        selector : (row) => row.faqtypeid,
        sortable:true
      },
      {
        name:"Faq Name",
        selector : (row) => row.faqname,
        sortable:true
      }, 
      {
        name:"Faq Discription",
        selector : (row) => row.faqdesc,
        sortable:true
      }, 
      
      {
        name:"Trans date",
        selector:(row)=>  row.transdate
      },
      {
        name:"Action",
        selector : (row) => <div className='row d-flex aline-item-right'><span className='col-md-6 ' onClick={() => editFAQType(row)}><i className='fa fa-edit'></i></span> <span>||</span> <span className='col-md-6' onClick={() => DeleteFaqname(row.id)}><i className='fa fa-trash' ></i></span></div>,
        sortable:true
      },  
      // { 
      //   name:"All FAQ",
      //   selector:(row)=><div className='row'><Button  className='col-md-12 ' style={{marginLeft: '15px',marginRight:'41px'}} variant='primary' onClick={handleClickOpen} >View </Button>
      //    <Dialog
      //   open={open}
      //   onClose={handleClose}
      //   aria-labelledby="alert-dialog-title"
      //   aria-describedby="alert-dialog-description"
      // >
      //   <DialogTitle id="alert-dialog-title">
      //     {row.id}
      //   </DialogTitle>
      //   <DialogContent>
      //     <DialogContentText id="alert-dialog-description">
      //       {
      //         row.faqdiscription
      //       }
      //     </DialogContentText>
      //   </DialogContent>
      //   <DialogActions>
      //     <Button onClick={handleClose}>close</Button>
      //     {/* <Button onClick={handleClose} autoFocus>
      //       Agree
      //     </Button> */}
      //   </DialogActions>
      // </Dialog></div>,
      //   sortable:true
      // } ,
  ]
  const addNewData = () => {
    setShow(true);
    setedit(null);
    state.faqname='';
    state.faqdisc ='';
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
                
               
                    { loading === true ? 
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">FAQ Details</h4>
                                    <Button variant='success'onClick={() => addNewData()} style={{background:'#e3e730' ,border:'none'}}>ADD NEW</Button>
                                    <Modal show={show} onHide={() => setShow(false)}>
                                            <Modal.Header closeButton>
                                            <Modal.Title>ADD || Modify FAQ </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                            <form>
                                              <div className="mb-3">
                                                  <label>Faq Name</label>
                                                  <input type="text" className="form-control input-default "name='faqname'value={state.faqname} onChange={handleInputChange} placeholder="Enter FAQ  name" />
                                              </div>
                                              <div className="mb-3">
                                                  <label>Faq Discription</label>
                                                  <input type="text" className="form-control input-default "name='faqdesc'value={state.faqdesc} onChange={handleInputChange} placeholder="Enter FAQ Discription" />
                                              </div>
                                              {/* <div className="mb-3">
                                                  <label>Trans date</label>
                                                  <input type="text" className="form-control input-default "name='faqdiscription'value={state.faqdiscription} onChange={handleInputChange} placeholder="Enter FAQ Type name" />
                                              </div> */}
                                            </form>
                                            </Modal.Body>
                                            <Modal.Footer>
                                            <Button variant="secondary"  onClick={() => setShow(false)}>
                                                Close
                                            </Button>
                                           <Button variant="primary"onClick={handleSubmit} style={{background:'#e3e730' ,border:'none'}}>
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
                       :<div><LoadingIndicator/></div>
                    }
                </div>
                    
                </div>

                
        </div >

    )
}

export default NewFAQ;