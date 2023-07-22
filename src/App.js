import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/header';
import Index from './pages/Index'
import Frenchiser from './pages/Frenchiser';
import CustomerProfile from './pages/customerProfile';
import customerExecutive from './pages/customer_exe';
import BankDetail from './pages/BankDetail';
import PersonalDetails from './pages/personal_details';
import OwnerDetails from './pages/VendorCompletedOrder';
import { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
// import NewOrder from './pages/newOrder';
// import CompletedOrder from './pages/completedOrder';
import Login from './pages/login';
import Logout from './pages/Logout';
import Footer from './pages/footer';
import Registration from './Forms/Registration'
import EducationalDetails from './pages/NewOrder';
import VendorExperience from './pages/VendorOrder';
import VendorCompletedOrder from './pages/VendorCompletedOrder';
import VendorOtherDetails from './pages/VendorOtherDetails';
import LiveVideoStreaming from './pages/Calling/AudioCall';
import NewAudioCall from './pages/Calling/NewAudioCall';
// import FirstStep from './Auth/Register/FirstStep';
import Register from './pages/Register';
import BasicDetails from './pages/BasicDetails';
import HeaderWeb from './Auth/Header/Header';
import FooterWeb from './Auth/Header/FooterWeb';
import SecondStep from './Auth/Register/SecondStep';
import ThirdStep from './Auth/Register/ThirdStep';
import OfficialDetails from './Auth/Register/FourthStep';
import Profile from './pages/Profile';
import VenderProfile from './pages/VenderProfile';
import Profileimage from './pages/Profileimage';
import VideoPlayer from './Video/VideoChat';
import NewVideoChat from './Video/newVidechat';
import VideoChat from './pages/Live/videoChat';
import StartLiveStreaming from './pages/Live/StartLiveStreaming';
// import Notifications from './Notifications/Notification';
import firebase from './firebase';
import Faqs from './pages/Faqs';
import NewFAQ from './pages/NewFaq';
import NewFaqName from './pages/NewFaqName';
import Banner from './pages/Banner';

import Vendordetails from './pages/Vendordetails';
import Vendor from './pages/Vendor';
import ExpertPortfolio from './Expert_Portfolio';
import MainBanner from './pages/MainBanner';
import RechargePlan from './pages/Admin/RechargePlan';
import GiftPlan from './pages/Admin/GiftPlan';


import OtherDetails from './pages/VendorWallet';
import BankUpdate from './pages/BankUpdate';
import OfficalsDetails from './pages/OfficalsDetails'
import FrenchiserDetails from './pages/FrenchiserDetails'
import WalletAmount from './pages/WalletAmount'
import RequestMoney from './pages/RequestMoney'
import Frenchiser_details from "./pages/Frenchiser_Details";
import CustomerExecutive from './pages/customer_exe';
import BanksDetails from './pages/BanksDetails';
import BasicUpdate from './pages/BasicUpdate';


function App() {
  const isLogin = sessionStorage.getItem('loggedIn');
  const [user, setUser] = useState({});

  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });

  console.log(show, notification);



  const updateUser = (data) => {
    setUser((prevUser) => ({ ...prevUser, ...data }));
  };

  const resetUser = () => {
    setUser({});
  };
  // React.useEffect(()=>{
  //   const msg=firebase.messaging();
  //   msg.requestPermission().then(()=>{
  //     return msg.getToken();
  //   }).then((data)=>{
  //     console.warn("token",data)
  //   })
  // }) 

  return (
    <>
      <div className=''>
        {/* {show ? (
        <ReactNotificationComponent
          title={notification.title}
          body={notification.body}
        />
      ) : (
        <></>
      )}
      <Notifications /> */}

        <BrowserRouter>
          {!isLogin ? <div>
            {/* <HeaderWeb/> */}
            <Routes>
              <Route path="*" element={<Login />} />
              <Route path="/video-chat" exact element={<VideoChat />} />
              <Route path="/live-chat" exact element={<StartLiveStreaming />} />

              <Route path="/register" exact element={<Register/>} />
              <Route path="/basicdetails" exact element={<BasicDetails/>} />
              <Route path="/banksdetails" exact element={<BanksDetails/>} />
              <Route path="/second" element={<SecondStep user={user} updateUser={updateUser} />} />
              <Route path="/third" element={<ThirdStep user={user} updateUser={updateUser} />} />
              <Route path="/fourth" element={<OfficialDetails user={user} updateUser={updateUser} />} />

            </Routes>
            <FooterWeb />
          </div>
            :
            <div>

              <Header></Header>
              <Routes>

                <Route path="/" exact element={<Index />} />

                <Route path="/frenchiser" exact element={<Frenchiser />} />
              <Route path="/frenchiserdetails" exact element={<FrenchiserDetails />} />
               <Route path="/frenchiser_wallet" exact element={<WalletAmount />} /> 
               <Route path="/requestmoney" exact element={<RequestMoney />} /> 

                <Route path="/profile" exact element={<Profile />} />
                <Route path="/bankupdate" exact element={<BankUpdate />} />
                <Route path="/basicupdate" exact element={<BasicUpdate   />} />
                <Route path="/faqs" exact element={<Faqs />} />
                <Route path="/faq" exact element={<NewFAQ />} />
                <Route path="/banner" exact element={<MainBanner />} />
                <Route path="/bank_upadate" exact element={<Vendordetails />} />
                {/* <Route path="/allvendor" exact element={<Vendordetails/>}/> */}
                <Route path="/faqname" exact element={<NewFaqName />} />
                <Route path="/customerProfile" exact element={<CustomerProfile />} />
                <Route path="/customerExecutive" exact element={<CustomerExecutive/>} /> 
                {/* <Route path='callExecutive' exact element={<CallExecutive/>}/> */}
                <Route path="/bank_upadate" exact element={<PersonalDetails />} />
                <Route path="/allvendor" exact element={<Vendor />} />
                <Route path="/bankDetails" exact element={<BankDetail />} />
                <Route path="/educationalDetails" exact element={<EducationalDetails />} />
                <Route path="/experience" exact element={<VendorExperience />} />
                <Route path="/otherdetails" exact element={<VendorOtherDetails />} />
                <Route path="/otherdetails" exact element={<OtherDetails/>}/>
<Route path="/officalsdetails" exact element={<OfficalsDetails/>}/>
<Route path="/vendordetails" exact element={<Frenchiser_details/>}/>
             
           
           
                {/* <Route path="/newoder" exact element={<NewOrder />} /> */}

                <Route path="/profileupload" exact element={<VenderProfile />} />

                {/* <Route path="/completedorder" exact element={<CompletedOrder />} /> */}
                <Route path="/audio-call" exact element={<LiveVideoStreaming />} />
                <Route path="/new-audio-call" exact element={<NewAudioCall />} />
                {/* <Route path='/' */}
                <Route path="/Uploadprofile" exact element={<Profileimage />} />
                <Route path="/logout" exact element={<Logout />} />
                <Route path="/start-video-chat" exact element={<VideoPlayer />} />
                <Route path="/join-video-chat" exact element={<NewVideoChat />} />
                {/* Admin Section */}
                <Route path="/expert_portfolio" exact element={<ExpertPortfolio />} />
                <Route path="/recharge_plan" exact element={<RechargePlan />} />
                <Route path="/gift_plan" exact element={<GiftPlan />} />
              </Routes>

              <Footer></Footer>
            </div>
          }
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
