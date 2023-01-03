import React, { useEffect, useState } from 'react';
import Logo from '../../images/logo/logo.png';
import Vactor from '../../images/icon/vactor.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormEmailOne, FormPhoneOne } from '../../layout/chingepassword/form_one.jsx';



function ForgetPassword() {
  const [datatype,setDatatype]=useState("");

  let navigate = useNavigate(),
     location = useLocation(),
      slicelocation = location.pathname.slice(1);

  useEffect(() => {

    if(slicelocation === "forgetpasswordphone"){
      setDatatype("Phone Number")
    }else if(slicelocation === "forgetpasswordemail"){
      setDatatype("Email")
    }else{
      navigate(`/`);
    }

}, []);

  return (
    <section className='signin'>
        <div className="vactor">
            <img src={Vactor} alt="vactor" />
        </div>
        <div className="signin__data">
            <div className="signin__header">
                <div className="img">
                <img src={Logo} alt="" />
                </div>
                <h5>Forget password?</h5>
                <span>Enter Your {datatype}</span>
            </div>
            {slicelocation === "forgetpasswordphone"?
            <FormPhoneOne/>
            :
            <FormEmailOne/> 
            }
        </div>
    </section>
  )
}

export default ForgetPassword;