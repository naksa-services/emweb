import LinerStepper from "./LinerStepper";
import { CssBaseline, Container, Paper, Box } from "@mui/material";
function Registration() {
  return (
    <>
      <div>
        {/* <div className="content-body "> */}
          <div className="container-fluid">
            {/* <div className="row page-titles mx-0">
              <div className="col-sm-6 p-md-0">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="javascript:void(0)">Home</a>
                  </li>
                  <li className="breadcrumb-item active">
                    <a href="javascript:void(0)">Registration</a>
                  </li>
                </ol>
              </div>
             
  </div> */}

            {/* <CssBaseline> */}
           
             
             <Container component={Box} p={4} >
             
             <Paper component={Box} p={3} >
            <div className="row">
            <LinerStepper ></LinerStepper>
            </div>
             
             </Paper>
             
           </Container>
            
            {/* </CssBaseline> */}
          </div>
        </div>
      {/* </div> */}
    </>
  );
}
export default Registration;
