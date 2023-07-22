import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import PersonalDetails from "./personal_details";
import NewOrder from "./NewOrder.js"
// import
import VendorOrder from "./VendorOrder";
import VendorCompletedOrder from "./VendorCompletedOrder";
import VendorWallet from "./VendorWallet";

import { useLocation } from "react-router-dom";




function Vendordetails() {
  const search = useLocation().search;
    const deviceid = new URLSearchParams(search).get('id');
    useEffect(()=>{
      console.log(deviceid);
    })
    
  return (
    <div>
      <div>
        <div className="content-body">
        <div className='container'>
          <div style={{  width: '100%'}}>
            <h4> Vendor Details</h4>
            <Tabs defaultActiveKey="first" >
                <Tab eventKey="first" title="Personal Details"
                style={{margin: -148,marginLeft: -380,marginRight:-50}}>
                   <PersonalDetails/>
                </Tab>
               
                <Tab eventKey="third" title="New Order"style={{margin: -148,marginTop:-100,marginLeft: -385,marginRight:-50}}>
                    <NewOrder/>
                </Tab>
               
                <Tab eventKey="fifth" title="Vender Completed Order"style={{margin: -148,marginTop:-100,marginLeft: -385,marginRight:-50}}>
                    <VendorCompletedOrder/>
                </Tab>
               <Tab eventKey="Six" title="Vender Wallet"
                style={{margin: -148,marginTop:-100,marginLeft: -385,marginRight:-50}}>
                    <VendorWallet/>
                </Tab>
                
            
       
       
        

           

          
                
            </Tabs>
    </div>
          </div>
        </div>
      </div>
   </div>
  );
}

export default Vendordetails;
