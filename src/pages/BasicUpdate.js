import React from 'react'
import { Link } from 'react-router-dom';

const BasicUpdate = () => {
  return (
    <div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6 '>
                 <h4 style={{textAlign:'center',paddingTop:'30px'}}>BASIC  DETAILS UPDATE
                 </h4>
                 <div className="form-group">
                    <label className="mb-1"><strong>Address :</strong></label>
                    <input type="text" name='address'
                    className="form-control" 
                    placeholder='Enter Address' />
                </div>
                <div className="form-group">
                    <label className="mb-1"><strong>Qualification :</strong></label>
                    <input type="text"  name='qualification'
                        className="form-control" placeholder='Enter Qualification' />
                </div>
                <div className="form-group">
                    <label className="mb-1"><strong>Age :</strong></label>
                    <input type="text"  name='age'
                        className="form-control" placeholder='Enter age ... ' />
                </div>
                    <div className="form-group">
                        <label className="mb-1"><strong>Gender	:</strong></label>
                        <input type="text"  name='gender'
                            className="form-control" placeholder='Enter gender ... ' />
                    </div>
                    <div className="form-group">
                    <label className="mb-1"><strong>Email :</strong></label>
                    <input type="email"  name='email'
                        className="form-control" placeholder='Enter email ...' />
                </div>
                <div className="form-group">
                    <label className="mb-1"><strong>Amount	:</strong></label>
                    <input type="text"  name='amount'
                        className="form-control" placeholder='Enter amount ...' />
                </div>
                <div className="form-group">
                    <label className="mb-1"><strong>No_OF_Vender :</strong></label>
                    <input type="text"  name='no_of_vender'
                        className="form-control" placeholder='Enter no_of_vender ... ' />
                </div>

                <div className="text-center">
                    <button type="button" 
                    className="btn btn-primary btn-block" style={{background:'#b11c26',border:'1px solid #b11c26'}}>Submit</button>
                </div><br/>
                <Link to="/bankupdate"><u> Don't Have account, Bank Update here</u></Link>

                </div>
            </div>

        </div>
    </div>
  )
}

export default BasicUpdate