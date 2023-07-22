import React from 'react'
import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react';
import { GetFAQName,FaqNamePost,DeleteFAQname } from '../api';
import DataTable from 'react-data-table-component';
import {Button,Modal} from 'react-bootstrap';

import { set } from 'react-hook-form';
import AlertMessage from './constants/messagealert';
import LoadingIndicator from './External/LoadingIndicator';
function NewFaqName() {

    const [user, setUser] = useState([]);
    const [show,setShow]=useState(false);
    const [loading, setloading] = useState(false);
    const [errmessage, seterrmessage] = useState('');
    const [errmessagetype, seterrmessagetype] = useState('')
    const [alert, setalert] = useState(false);
    const [edit, setedit] = useState([]);
   
    // Form posting 
    const [state, setState] = useState({
        faqname: "",
        faqdesc:"",
        transdate:""
       
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
          faqtypeid: edit,
            faqname:state.faqname,
            faqdesc:state.faqdesc,
            transdate:state.transdate,
            
            
        }
        
        FaqNamePost(data).then((res) => {
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

  const deletFAQName= (faqtypeid) =>{
    DeleteFAQname(faqtypeid).then((res) => {
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
    // debugger;
    GetFAQName().then(res => {
        if(res && res.data){
            console.log(res.data);

            setUser(res.data);
            setloading(true);
        }
    })
  }

  const editFAQName= (row) =>{

    setShow(true);
    setedit(row.faqtypeid);
    state.faqname = row.faqname;
    state.faqdesc=row.faqdesc;
    state.transdate=row.transdate;
  }

  useEffect(() => {
    getPersonalData();
  },[])
  const column =[
    {
        name:"FAQ  faqtypeid",
        selector : (row) => row.faqtypeid,
        sortable:true
      },
      {
        name:"FAQ  Name",
        selector : (row) => row.faqname,
        sortable:true
      }, 
      {
        name:"FAQ Discription",
        selector : (row) => row.faqdesc,
        sortable:true
      },
      {
        name:"Transdate",
        selector : (row) => row.transdate,
      
      },  
      {
        name:"Action",
        selector : (row) => <div className='row'><div className='col-md-6' onClick={() => editFAQName(row)}><i className='fa fa-edit'></i></div> || <div className='col-md-6' onClick={() => deletFAQName(row.faqtypeid)}><i className='fa fa-trash'></i></div></div>,
        sortable:true
      },  
  ]
  const addNewData = () => {
    setShow(true);
    setedit(null);
    state.faqname ='';
    state.faqdesc='';
    state.transdate='';
  } 

    return (
        <div>
            <div>
                <div className="content-body">
                <div className='container-flufaqtypeid'>
                <AlertMessage
                show={alert}
                onhfaqtypeide={() => setalert(false)}
                data={errmessagetype}
                message={errmessage}
                />
                </div>
                
               
                    { loading === true ? 
                    <div className="container-flufaqtypeid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">FAQ Details</h4>
                                    <Button variant='success'onClick={() => addNewData()} style={{background:'#e3e730' ,border:'none'}}>ADD NEW</Button>
                                    <Modal show={show} onHfaqtypeide={() => setShow(false)}>
                                            <Modal.Header closeButton>
                                            <Modal.Title>ADD || Modify FAQ </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                            <form>
                                            <div className="mb-3">
                                                <label>FAQ  Name</label>
                                                <input type="text" className="form-control input-default "name='faqname'value={state.faqname} onChange={handleInputChange} placeholder="Enter FAQ  name" />
                                            

                                            <label>FAQ  Discription</label>
                                                <input type="text" className="form-control input-default "name='faqdesc'value={state.faqdesc} onChange={handleInputChange} placeholder="Enter FAQ  faqdesc" />
                                            </div>
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

export default NewFaqName;