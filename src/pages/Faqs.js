import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useState, useEffect } from 'react';
import { GetFAQType ,FaqTypePost, DeleteFAQ} from '../api';
import DataTable from 'react-data-table-component';
import {Button,Modal} from 'react-bootstrap';

import { set } from 'react-hook-form';
import AlertMessage from './constants/messagealert';
import LoadingIndicator from './External/LoadingIndicator';
function Faqs() {

    const [user, setUser] = useState([]);
    const [show,setShow]=useState(false);
    const [loading, setloading] = useState(false);
    const [errmessage, seterrmessage] = useState('');
    const [errmessagetype, seterrmessagetype] = useState('')
    const [alert, setalert] = useState(false);
    const [edit, setedit] = useState([]);
    const navigate = useNavigate();
   
    // Form posting 
    const [state, setState] = useState({
        faqtypename: "",
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
          id: edit,
            faqtypename:state.faqtypename,
            
        }
        
        FaqTypePost(data).then((res) => {
          if(res){
            setShow(false);
            setalert(true);
            seterrmessagetype('success');
            seterrmessage(`${res.data} Successfully`)
            getPersonalData();
            
          }
          else if(res){
            setShow(false);
            setalert(true);
            seterrmessagetype('failure');
            seterrmessage(`Something went wrong, Please tray again..`)
            getPersonalData();
          }
        })
      };

  const deletFAQTYPE = (id) =>{
    DeleteFAQ(id).then((res) => {
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
    GetFAQType().then(res => {
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
    state.faqtypename = row.faqtypename;
  }
  
  const gotoFAQ = (event) =>{
    navigate(`/faq?fid=${event.id}`);
 
    console.log('this is event id',event.id);
  }

  useEffect(() => {
    getPersonalData();
  },[])


  const column =[
    {
        name:"FAQ Type ID",
        selector : (row) => row.id,
        sortable:true
      },
      {
        name:"FAQ Type Name",
        selector : (row) => row.faqtypename,
        sortable:true
      },  
      {
        name:"Action",
        selector : (row) => <div className='row'><div className='col-md-6' 
        onClick={() => editFAQType(row)}><i className='fa fa-edit'></i></div> || 
        <div className='col-md-6' onClick={() => deletFAQTYPE(row.id)}>
          <i className='fa fa-trash'></i></div></div>,
        sortable:true
      },  
      {
        name:"View ",
        selector : (row) => <div className='row'><div className='col-md-6' 
        onClick={() => gotoFAQ(row)}><i className='fa fa-eye'></i></div> </div>,
        sortable:true
      },  
      
  ]
  const addNewData = () => {
    setShow(true);
    setedit(null);
    state.faqtypename ='';
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
                                    <h4 className="card-title">FAQ Type Details</h4>
                                    <Button variant='success'onClick={() => addNewData()}
                                     style={{background:'#e3e730' ,border:'none'}}>ADD NEW</Button>


                                    <Modal show={show} onHide={() => setShow(false)}>
                                            <Modal.Header closeButton>
                                            </Modal.Header>
                                            <Modal.Body>
                                            <form>
                                            <div className="mb-3">
                                                <label>FAQ Type Name</label>
                                                <input type="text" className="form-control input-default "name='faqtypename'value={state.faqtypename} onChange={handleInputChange} placeholder="Enter FAQ Type name" />
                                            </div>
                                                           </form>
                                            </Modal.Body>
                                            <Modal.Footer>
                                            <Button variant="secondary"  onClick={() => setShow(false)}>
                                                Close
                                            </Button>
                                           <Button variant="primary"onClick={handleSubmit} className='allBtn' 
                                           style={{background:'#e3e730' ,border:'none'}}>
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

export default Faqs;