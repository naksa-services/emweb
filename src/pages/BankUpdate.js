import React from 'react'

const BankUpdate = () => {
  return (
    <div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6 bank'>
                 <h4 style={{textAlign:'center',paddingTop:'30px'}}>BANK  DETAILS UPDATE
                 </h4>
                 <div className="form-group">
                    <label className="mb-1"><strong>Aadhar_Card :</strong></label>
                    <input type="text" name='aadhar_card' 
                    className="form-control" 
                    placeholder='Enter aadhar_card_no ...' />
                </div>
                <div className="form-group">
                    <label className="mb-1"><strong>Pan_Card :</strong></label>
                    <input type="text" name='aadhar_card' 
                    className="form-control" 
                    placeholder='Enter aadhar_card_no ...' />
                </div>
                <div className="form-group">
                    <label className="mb-1"><strong>Account_Number	:</strong></label>
                    <input type="text"  name='account_number'
                        className="form-control" placeholder='Enter account_number ... ' />
                </div>
                <div className="form-group">
                    <label className="mb-1"><strong>IFSC_Code	:</strong></label>
                    <input type="text"  name='account_number'
                        className="form-control" placeholder='Enter ifsc_code ... ' />
                </div>
                <div className="form-group">
                    <label className="mb-1"><strong>Account_Holder	:</strong></label>
                    <input type="text"  name='account_number'
                        className="form-control" placeholder='Enter account_holder ... ' />
                </div>
                
                <div className="form-group">
                    <label className="mb-1"><strong>Bank_Name	</strong></label>
                    <input type="text"  name='bank_name'
                        className="form-control" placeholder='Enter bankname ... ' />
                </div>
                <div className="form-group">
                    <label className="mb-1"><strong>Branch	</strong></label>
                    <input type="text"  name='branch_name'
                        className="form-control" placeholder='Enter  branch_name ' />
                </div>
                <div className="text-center">
                                                <button type="button" 
                                                className="btn btn-primary btn-block" style={{background:'#b11c26',border:'1px solid #b11c26'}}>Submit</button>
                                            </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default BankUpdate