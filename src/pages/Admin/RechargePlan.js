import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { set } from 'react-hook-form';
import LoadingIndicator from '../External/LoadingIndicator';
import AlertMessage from '../constants/messagealert';
import reactSelect from 'react-select';
import { GetRechargePlan, UpsrtRechargePlan } from '../../api';
function RechargePlan() {
    const search = useLocation().search;
    const vendorid = new URLSearchParams(search).get('id');
    const [user, setUser] = useState([]);
    const [show, setShow] = useState(false);
    const [loading, setloading] = useState(false);
    const [errmessage, seterrmessage] = useState('');
    const [errmessagetype, seterrmessagetype] = useState('')
    const [alert, setalert] = useState(false);
    const [state, setState] = useState({
        amount: "",

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
            amount: state.amount,
        }
        UpsrtRechargePlan(data).then((res) => {
            console.log(res);
            if (res.status === true && res) {
                setShow(false);
                setalert(true);
                seterrmessagetype('success');
                seterrmessage(`${res.data} Successfully`)
                GetRechargePlanData();

            }
            else if (res.status === false && res) {
                setShow(false);
                setalert(true);
                seterrmessagetype('failure');
                seterrmessage(`Something went wrong, Please tray again..`)
                GetRechargePlanData();
            }
        })
    };
    const GetRechargePlanData = () => {
        // debugger;
        GetRechargePlan().then(res => {
            console.log(vendorid)
            if (res && res.data === "No Rows Found") {
                setUser([]);
                setloading(true);
            } else {
                setUser(res.data);
                setloading(true);

            }
        })
    }

    useEffect(() => {
        GetRechargePlanData();
    }, [])
    const column = [
        {
            name: "ID",
            selector: (row) => row.id,
            sortable: true
        },
        {
            name: "Amount",
            selector: (row) => row.amount,
            sortable: true
        },
        {
            name: "Action",
            selector: (row) => <div className='row'><div className='col-md-4'><i className='fa fa-edit'></i></div> || <div className='col-md-4'><i className='fa fa-trash'></i></div></div>,
            sortable: true
        },




    ]
    const editDataform = () => {
        setShow(true);

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
                                            <h4 className="card-title">Recharge Plan</h4>
                                            <Button variant="primary" onClick={() => editDataform()} style={{background:'#e3e730' ,border:'none'}}>
                                                Add Recharge Plan
                                            </Button>
                                            <Modal show={show} onHide={() => setShow(false)}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Add Recharge Plan</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <form>
                                                        <div className="mb-3">
                                                            <input type="text" className="form-control input-default " name='amount' onChange={handleInputChange} placeholder="Enter ecategory" />
                                                        </div>



                                                    </form>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={() => setShow(false)}>
                                                        Close
                                                    </Button>
                                                    <Button variant="primary" onClick={handleSubmit} cstyle={{background:'#e3e730' ,border:'none'}}>
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
                            : <div><LoadingIndicator /></div>
                    }
                </div>
            </div>


        </div >

    )
}

export default RechargePlan;