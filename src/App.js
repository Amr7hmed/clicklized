import { BrowserRouter, Routes, Route } from 'react-router-dom';
// This Is Buyer Pages
import HomeBuyer from './pages/buyer/home/index.jsx';
import Myrequest from './pages/buyer/myrequest/index.jsx';
import Updatepassword from './pages/password/updatepassword.jsx';
import Verification from './pages/verification/index.jsx';
import ProfileBuyer from './pages/buyer/profile/index.jsx';
import SignIn from './pages/signin/index.jsx';
import Signup from './pages/signup/index.jsx';
import CreateRequest from './pages/buyer/createrequest/index.jsx';
import ShowRequest from './pages/buyer/showrequest/index.jsx';
import QuestionsBuyer from './pages/buyer/questionsbuyer/index.jsx';
import Offers from './pages/buyer/offers/index.jsx';
import Suppliers from './pages/buyer/suppliers/index.jsx';
// This Is Seller Pages
import HomeSeller from './pages/seller/home/index.jsx';
import MyRequestSeller from './pages/seller/myrequest/index.jsx';
import RequestDetails from './pages/seller/requestdetails/index.jsx';
import QuestionsSeller from './pages/seller/questionsseller/index.jsx';
import ProfileSeller from './pages/seller/profile/index.jsx';
import { useState } from 'react';
import ResendCode from './pages/resendcode/index.jsx';
import ForgetPasswordEmail from './pages/password/forgetpasswordemail.jsx';
import ForgetPasswordCode from './pages/password/forgetpasswordcode.jsx';

function App() {
  return (
    <main className={"main"}>
      <BrowserRouter>
        <Routes>
        {localStorage.getItem("tokenclicklized") === null ?
        <Route path="/" element={<SignIn />} exact />
        :
      <Route path="/" element={<HomeBuyer />} exact />      
      //<Route path="/" element={<HomeSeller />} exact />
      }
      <Route path="/signup" element={<Signup/>} exact />
      <Route path="/resendcode" element={<ResendCode />} exact />
      <Route path="/verification" element={<Verification />} exact />
      <Route path="/forgetpassword" element={<ForgetPasswordEmail />} exact />
      <Route path="/forgetpasswordcode" element={<ForgetPasswordCode />} exact />
      <Route path="/updatepassword" element={<Updatepassword />} exact />
      {/*This Is Buyer Pages*/}
      <Route path="/suppliers" element={<Suppliers />} exact />
      <Route path="/profilebuyer" element={<ProfileBuyer />} exact />
      <Route path="/addrequest/:name" element={<CreateRequest />} exact />
      <Route path="/myrequest" element={<Myrequest />} exact />
      <Route path="/showrequestbuyer/:name/:id" element={<ShowRequest />} exact />
      <Route path="/questionsbuyer/:name/:id" element={<QuestionsBuyer />} exact />
      <Route path="/offersbuyer/:name/:id" element={<Offers />} exact />
      {/*This Is Seller Pages*/}
      <Route path="/myrequestseller" element={<MyRequestSeller />} exact />
      <Route path="/requestdetailsseller/:name/:id" element={<RequestDetails />} exact />
      <Route path="/questionsseller/:name/:id" element={<QuestionsSeller />} exact />
      <Route path="/profileseller" element={<ProfileSeller />} exact />
      
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
