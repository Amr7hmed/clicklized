import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// This Is Buyer Pages . 
import Myrequest from './pages/buyer/myrequest/index.jsx';
import Verification from './pages/verification/index.jsx';
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
import ResendCode from './pages/resendcode/index.jsx';
// Email Password
import ForgetPasswordEmail from './pages/emailpassword/forgetpasswordemail.jsx';
import ForgetPasswordCode from './pages/emailpassword/forgetpasswordcode.jsx';
import Updatepassword from './pages/emailpassword/updatepassword.jsx';

import Home from './layout/home/index.jsx';
import OfferRequest from './pages/seller/offerrequest/index.jsx';

import { Authcontext } from './store/context.js';
import SignInPhone from './pages/signinphone/index.jsx';
import ResendCodePhone from './pages/resendcodephone/index.jsx';
import VerificationPhone from './pages/verificationphone/index.jsx';
import ForgetPasswordPhone from './pages/phonepassword/forgetpasswordphone.jsx';
import ForgetPasswordCodePhone from './pages/phonepassword/forgetpasswordcode.jsx';
import UpdatepasswordPhone from './pages/phonepassword/updatepassword.jsx';

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
      {/* Active Acount By Create Email*/}
      <Route path="/resendcode" element={<ResendCode />} exact />
      <Route path="/verification" element={<Verification />} exact />
      {/* Active Acount By Create Phone Number */}
      <Route path="/resendcodephone" element={<ResendCodePhone />} exact />
      <Route path="/verificationphone" element={<VerificationPhone />} exact />
      {/*Forget Password By Email */}
      <Route path="/forgetpassword" element={<ForgetPasswordEmail />} exact />
      <Route path="/forgetpasswordcode" element={<ForgetPasswordCode />} exact />
      <Route path="/updatepassword" element={<Updatepassword />} exact />
      {/*Forget Password By Phone Number */}
      <Route path="/forgetpasswordphone" element={<ForgetPasswordPhone />} exact />
      <Route path="/forgetpasswordcodephone" element={<ForgetPasswordCodePhone />} exact />
      <Route path="/updatepasswordphone" element={<UpdatepasswordPhone />} exact />
      
      {/*This Is Buyer Pages*/}
      <Route path="/suppliers" element={<Suppliers />} exact />
      <Route path="/profilebuyer" element={<ProfileBuyer />} exact />
      <Route path="/addrequestbuyer" element={<CreateRequest />} exact />
      <Route path="/myrequest" element={<Myrequest />} exact />
      <Route path="/showrequestbuyer/:name/:id" element={<ShowRequestbuyer />} exact />
      {/*This Is Seller Pages*/}
      <Route path="/myrequestseller" element={<MyRequestSeller />} exact />
      <Route path="/requestdetailsseller/:id" element={<RequestDetails />} exact />
      <Route path="/offerrequest/:id" element={<OfferRequest />} exact />
      <Route path="/profileseller" element={<ProfileSeller />} exact />
      
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
