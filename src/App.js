import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/index.jsx';
import ForgetPassword from './pages/password/forgetpassword.jsx';
import Updatepassword from './pages/password/updatepassword.jsx';
import Verification from './pages/password/verification.jsx';
import SignIn from './pages/signin/index.jsx';
import Signup from './pages/signup/index.jsx';

function App() {
  return (
    <main className={"main"}>
      <BrowserRouter>
        <Routes>
        {localStorage.getItem("token") === null ?
        <Route path="/" element={<SignIn />} exact />
        :
        <Route path="/" element={<Home />} exact />
      }
      <Route path="/signup" element={<Signup />} exact />
      <Route path="/forgetpassword" element={<ForgetPassword />} exact />
      <Route path="/verification" element={<Verification />} exact />
      <Route path="/updatepassword" element={<Updatepassword />} exact />
      
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
