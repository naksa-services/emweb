import React ,{useState}from 'react';
import {Stepper,Step,Button, StepLabel, Typography,TextField} from '@mui/material';
import './LinerSteper.css';
function getstep(){
  return [
    "Basic information",
    "Contact information",
    "Personal information",
    "Payment"
  ]
}
function getStepContent(step){
  switch(step){
    case 0:
      return (
        <>
                      <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            name="firstName"
            />
            <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            name="lastName"
            />
            <TextField
            id="nick-name"
            label="Nick Name"
            variant="outlined"
            placeholder="Enter Your Nick Name"
            fullWidth
            margin="normal"
            name="nickName"
            />
        </>
      );
    case 1:
      return (
        <>
                        <TextField
                id="email"
                label="E-mail"
                variant="outlined"
                placeholder="Enter Your E-mail Address"
                fullWidth
                margin="normal"
                name="emailAddress"
              />
              <TextField
                id="phone-number"
                label="Phone Number"
                variant="outlined"
                placeholder="Enter Your Phone Number"
                fullWidth
                margin="normal"
                name="phoneNumber"
              />
              <TextField
                id="alternate-phone"
                label="Alternate Phone"
                variant="outlined"
                placeholder="Enter Your Alternate Phone"
                fullWidth
                margin="normal"
                name="alternatePhone"
              />
        </>
      ) 
    case 2:
      return (
        <>
                  <TextField
          id="address1"
          label="Address 1"
          variant="outlined"
          placeholder="Enter Your Address 1"
          fullWidth
          margin="normal"
          name="address1"
          />
          <TextField
          id="address2"
          label="Address 2"
          variant="outlined"
          placeholder="Enter Your Address 2"
          fullWidth
          margin="normal"
          name="address2"
          />
          <TextField
          id="country"
          label="Country"
          variant="outlined"
          placeholder="Enter Your Country Name"
          fullWidth
          margin="normal"
          name="country"
          />
          
          </>
      ) ; 
    case 3:
      return (
        <>
          <TextField
          id="cardNumber"
          label="Card Number"
          variant="outlined"
          placeholder="Enter Your Card Number"
          fullWidth
          margin="normal"
          name="cardNumber"
          />
          <TextField
          id="cardMonth"
          label="Card Month"
          variant="outlined"
          placeholder="Enter Your Card Month"
          fullWidth
          margin="normal"
          name="cardMonth"
          />
          <TextField
          id="cardYear"
          label="Card Year"
          variant="outlined"
          placeholder="Enter Your Card Year"
          fullWidth
          margin="normal"
          name="cardYear"
          />
        </>
      ) ; 
      default : return "Unknown case"
  }
}
const LinerStepper=()=> {
const [activeStep,setActiveStep]=useState(0);
const steps=getstep();
const handleNext=()=>{
  setActiveStep(activeStep+1);
}
const handleBack=()=>{
  setActiveStep(activeStep-1);
}
  return (
    <div>
      
      <Stepper activeStep={activeStep} className="Stepperbg">
        {
          steps.map((step,index)=>{
            return(
              <Step>
              <StepLabel>{step}</StepLabel>
            </Step>
            )
          })
        }
        
        
      </Stepper>
      
      
      {
        activeStep==4 ?(
          <Typography variant='h3' align='center' className='Formbg'>Thank you</Typography>
        ):(
          <>
        <div className='row'>
          <div className="col-md-2"></div>
          <div className="col-sm-8 ">
        <form className='Formbg mt-5'>
        {
          getStepContent(activeStep)
        }
        <div className="modal-footer">
        <div className='mt-3'>
        <Button  variant='contained' color='primary' disabled={activeStep===0} onClick={handleBack}>Back</Button>
        <Button variant='contained'color='primary'className='mx-2 ' onClick={handleNext}>
          {activeStep===3 ? "Finish":"Next"}
        </Button>
        </div>
        </div>
        </form>
        
       
        </div>
        </div>  
            

      
          </>
        )
      }
      
    </div>
  )
}

export default LinerStepper
