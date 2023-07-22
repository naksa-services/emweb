import React from 'react'
import {useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getEducationalDetails,getOfficalsDetails,getOtherDetails,UpsertEducationalDetails, UpsertOtherDetails } from '../api';
import AlertMessage from './constants/messagealert';
import DataTable from 'react-data-table-component';
import {Button,Modal} from 'react-bootstrap';
import LoadingIndicator from './External/LoadingIndicator';
import OfficialDetails from '../Auth/Register/FourthStep';
function OfficalsDetails() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)

    const [user, setUser] = useState([]);
    const [show,setShow]=useState(false);
    const [loading, setloading] = useState(false);
    const [errmessage, seterrmessage] = useState('');
    const [errmessagetype, seterrmessagetype] = useState('')
    const [alert, setalert] = useState(false);
    //it for data post
    const [state, setState] = useState({
        aboutus: "",
        audicallprice: "",
        videocallprice:"",
        chatprice:"",
        language:"",
        
      





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
            aboutus:state.aboutus,
            audicallprice:state.audicallprice,
            videocallprice:state.videocallprice,
            chatprice:state.chatprice,
            language:state.language,
            vid:'1'
        }
        UpsertOtherDetails(data).then((res) => {
          if(res.status === true && res){
            setShow(false);
            setalert(true);
            seterrmessagetype('success');
            seterrmessage(`${res.data} Successfully`)
            getPersonalData();
            
          }
          else if(res.status === false && res){
            setShow(false);
            setalert(true);
            seterrmessagetype('failure');
            seterrmessage(`Something went wrong, Please tray again..`)
            getPersonalData();
          }
        })
      };
    
      
      
    
  const getPersonalData =() =>{
    // debugger;
    const id = params.get("id");
    getOfficalsDetails(id).then(res => {
      if(res && res.data){
          setUser(res.data);
          setloading(true);
      }
  })
  }

  useEffect(() => {
    getPersonalData();
  },[])
  const column =[
    {
        name:"aboutus",
        selector : (row) => row.aboutus,
        sortable:true
      },
      {
        name:"audicallprice",
        selector : (row) => row.audicallprice,
        sortable:true
      },
      {
        name:" videocallprice",
        selector : (row) => row.videocallprice,
        sortable:true
      },
      {
        name:"chatprice",
        selector : (row) => row.chatprice,
        sortable:true
      },
      {
        name:"language",
        selector : (row) => row.language,
        sortable:true
      },  
      
      

  ]
  const editDataform = () => {
    setShow(true);
    state.aboutus=user[0].aboutus;
    state.audicallprice=user[0].audicallprice;
    state.videocallprice=user[0].videocallprice;
    state.chatprice=user[0].chatprice;
    state.language=user[0].language;
  

  } 
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
                                      <h4 className="card-title">Offical Details</h4>
                                      <Button variant='success'onClick={()=>editDataform()} style={{background:'#e3e730' ,border:'none'}} >Edit</Button>
                                      <Modal show={show} onHide={() => setShow(false)}>
                                              <Modal.Header closeButton>
                                              <Modal.Title>Modify Your Offical Details</Modal.Title>
                                              </Modal.Header>
                                              <Modal.Body>
                                              <form>
                                              <div className="mb-3">
                                                  <label>aboutus</label>
                                                  <input type="text" 
                                                  className="form-control input-default "
                                                  name='aboutus' 
                                                  value={state.aboutus} 
                                                  onChange={handleInputChange} 
                                                  placeholder="Enter High aboutus" />
                                              </div>
                                            
                                              <div className="mb-3">
                                                  <label>audicallprice</label>
                                                  <input type="number" 
                                                  className="form-control input-default " 
                                                  name='audicallprice'
                                                   value={state.audicallprice}onChange={handleInputChange}
                                                    placeholder="Entet College audicallprice" />
                                              </div>
                                              <div className="mb-3">
                                                  <label>videocallprice</label>
                                                  <input type="number" className="form-control input-default " 
                                                  name='videocallprice' 
                                                  value={state.videocallprice}
                                                  onChange={handleInputChange} 
                                                  placeholder="Enter videocallprice" />
                                              </div>
                                              <div className="mb-3">
                                                  <label>chatprice</label>
                                                  <input type="number" className="form-control input-default " 
                                                  name='chatprice' 
                                                  value={state.chatprice}
                                                  onChange={handleInputChange} 
                                                  placeholder="Enter chatprice" />
                                              </div>
                                        
                                              <div className="mb-3">
                                                  <label>language</label>
                                                  <input type="text"
                                                   className="form-control input-default "
                                                    name='language'
                                                     value={state.language}
                                                     onChange={handleInputChange} 
                                                     placeholder="Enter language" />
                                              </div>
                                         


                                            
                                              
                                          </form>
                                              </Modal.Body>
                                              <Modal.Footer>
                                              <Button variant="secondary" onClick={()=>setShow(false)}>
                                                  Close
                                              </Button>
                                              <Button variant="primary" onClick={handleSubmit} style={{background:'#e3e730' ,border:'none'}}>
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
                            : <div> <LoadingIndicator/></div>
                        }
                        </div>
                   
                   
            </div>
        </div >

    )
}

export default OfficalsDetails;