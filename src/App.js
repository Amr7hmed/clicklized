import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// This Is Buyer Pages . 
import Myrequest from './pages/buyer/myrequest/index.jsx';
import Verification from './pages/activeaccount/verification.jsx';
import ProfileBuyer from './pages/buyer/profile/index.jsx';
// This Is Auth Pages . 
import SignInEmail from './pages/signinemail/index.jsx';
import Signup from './pages/signup/index.jsx';
import CreateRequest from './pages/buyer/createrequest/index.jsx';
import ShowRequestbuyer from './pages/buyer/showrequest/index.jsx';
import Suppliers from './pages/buyer/suppliers/index.jsx';
// This Is Seller Pages .
import MyRequestSeller from './pages/seller/myrequest/index.jsx';
import RequestDetails from './pages/seller/requestdetails/index.jsx';
import ProfileSeller from './pages/seller/profile/index.jsx';
import ResendCode from './pages/activeaccount/resendcode.jsx';
// Email Password

import Home from './layout/home/index.jsx';
import OfferRequest from './pages/seller/offerrequest/index.jsx';

import { Authcontext } from './store/context.js';
import SignInPhone from './pages/signinphone/index.jsx';


import ForgetPassword from './pages/chingepassword/screen_one.jsx';
import ForgetPasswordCode from './pages/chingepassword/screen_two.jsx';
import Updatepassword from './pages/chingepassword/screen_three.jsx';
import MyOffersSeller from './pages/seller/myofferres/index.jsx';


function App() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <main className={language}>
      <BrowserRouter>
        <Routes>
        {localStorage.getItem("tokenclicklized") === null ?
        <Route path="/" element={<SignInEmail />} exact />
        :
      <Route path="/" element={<Home />} exact />      
      }
      <Route path="/signinphone" element={<SignInPhone />} exact />
      <Route path="/signup" element={<Signup/>} exact />

      {/* Active Acount By Create Email && Phone Number*/}
      <Route path="/resendcodeemail" element={<ResendCode />} exact />
      <Route path="/resendcodephone" element={<ResendCode />} exact />
      <Route path="/verificationemail" element={<Verification />} exact />
      <Route path="/verificationphone" element={<Verification />} exact />

      {/*Forget Password By Email && Phone Number*/}
      <Route path="/forgetpasswordemail" element={<ForgetPassword />} exact />
      <Route path="/forgetpasswordphone" element={<ForgetPassword />} exact />
      <Route path="/passwordcodeemail" element={<ForgetPasswordCode />} exact />
      <Route path="/passwordcodephone" element={<ForgetPasswordCode/>} exact />
      <Route path="/updatepassword" element={<Updatepassword />} exact />
      
      {/*This Is Buyer Pages*/}
      <Route path="/suppliers" element={<Suppliers />} exact />
      <Route path="/profilebuyer" element={<ProfileBuyer />} exact />
      <Route path="/addrequestbuyer" element={<CreateRequest />} exact />
      <Route path="/myrequest" element={<Myrequest />} exact />
      
      <Route path="/requestdetailsbuyer/:id" element={<ShowRequestbuyer />} exact />
      <Route path="/questionsbuyer/:id" element={<ShowRequestbuyer />} exact />
      <Route path="/offersbuyer/:id" element={<ShowRequestbuyer />} exact />
      
      {/*This Is Seller Pages*/}
      <Route path="/myrequestseller" element={<MyRequestSeller />} exact />
      <Route path="/myoffersseller" element={<MyOffersSeller />} exact />

      <Route path="/requestdetailsseller/:id" element={<RequestDetails />} exact />
      <Route path="/questionsseller/:id" element={<RequestDetails />} exact />
      <Route path="/offersseller/:id" element={<RequestDetails />} exact />
      
      <Route path="/offerrequest/:id" element={<OfferRequest />} exact />
      <Route path="/profileseller" element={<ProfileSeller />} exact />
      
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
