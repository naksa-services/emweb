import React from 'react'
import Footer from './footer';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import './portfolio.css';
import { useState } from 'react';
export default function Portfolio() {
    const [Prize, setPrize] = useState("");
    const [ProductName, setProductName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

   
const handleSubmit =(e)=>{
    e.preventDefault();
    let data={Prize,ProductName}
    console.log(data);
    fetch('http://localhost:5000/users',{
           headers:{
            'Content-Type':'application/json'
           },
           method:"POST",
           body:JSON.stringify(data)
    }).then((res)=>{return res.json()}).then((data)=>{console.log(data)}).catch((error)=>{
        console.log(error)
    })

}  
    return (
        <div>
            <div className="content-body">
                <div className="container-fluid">
                    <div className="row page-titles mx-0">
                        <div className="col-sm-6 p-md-0">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active"><a href="javascript:void(0)">Frenchiser Order</a></li>
                            </ol>
                        </div>
                        {/* <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                            <button type="button" className="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#exampleModalLong">Add Portfolio</button>

                        </div> */}
                    </div>
                    <div className="modal fade" id="exampleModalLong">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                {/* <div className="modal-header">
                                    <h5 className="modal-title">Add Portfolio</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal">
                                    </button>
                                </div> */}
                                <div className="modal-body">
                                    <form onSubmit={handleSubmit}>
                                       

                                        <input
                                            type="file"
                                            value={selectedFile}
                                            onChange={(e) => setSelectedFile(e.target.files[0])}
                                            className='form-control'
                                        /><br/>
                                         <input
                                            type="text"
                                            value={ProductName}
                                            onChange={(e) => setProductName(e.target.value)}
                                            placeholder='Enter your name'
                                            className='form-control'

                                        /><br/>
                                        <input
                                            type="text"
                                            value={Prize}
                                            placeholder='Enter your occupation'
                                            onChange={(e) => setPrize(e.target.value)}
                                            className='form-control'

                                        />

                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger light" data-bs-dismiss="modal">Close</button>
                                    <Button variant="primary"type="submit"  onClick={handleSubmit} style={{background:'#e3e730' ,border:'none'}}>
                                                Save Changes
                                            </Button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <div className="our-team">
                                        <div className="picture">
                                            <img className="img-fluid" src="https://picsum.photos/130/130?image=1027" />
                                        </div>
                                        <div className="team-content">
                                            <h3 className="name">Michele Miller</h3>
                                            <h4 className="title">Web Developer</h4>
                                        </div>
                                        <ul className="social">
                                            <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-facebook" aria-hidden="true"></a></li>
                                            <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-twitter" aria-hidden="true"></a></li>
                                            <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-google-plus" aria-hidden="true"></a></li>
                                            <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-linkedin" aria-hidden="true"></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <div className="our-team">
                                        <div className="picture">
                                            <img className="img-fluid" src="https://picsum.photos/130/130?image=839" />
                                        </div>
                                        <div className="team-content">
                                            <h3 className="name">Patricia Knott</h3>
                                            <h4 className="title">Web Developer</h4>
                                        </div>
                                        <ul className="social">
                                            <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-facebook" aria-hidden="true"></a></li>
                                            <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-twitter" aria-hidden="true"></a></li>
                                            <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-google-plus" aria-hidden="true"></a></li>
                                            <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-linkedin" aria-hidden="true"></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <div className="our-team">
                                        <div className="picture">
                                            <img className="img-fluid" src="https://picsum.photos/130/130?image=856" />
                                        </div>
                                        <div className="team-content">
                                            <h3 className="name">Justin Ramos</h3>
                                            <h4 className="title">Web Developer</h4>
                                        </div>
                                        <ul className="social">
                                            <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-facebook" aria-hidden="true"></a></li>
                                            <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-twitter" aria-hidden="true"></a></li>
                                            <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-google-plus" aria-hidden="true"></a></li>
                                            <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-linkedin" aria-hidden="true"></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <div className="our-team">
                                        <div className="picture">
                                            <img className="img-fluid" src="https://picsum.photos/130/130?image=836" />
                                        </div>
                                        <div className="team-content">
                                            <h3 className="name">Mary Huntley</h3>
                                            <h4 className="title">Web Developer</h4>
                                        </div>
                                        <ul className="social">
                                            <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-facebook" aria-hidden="true"></a></li>
                                            <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-twitter" aria-hidden="true"></a></li>
                                            <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-google-plus" aria-hidden="true"></a></li>
                                            <li><a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-linkedin" aria-hidden="true"></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
