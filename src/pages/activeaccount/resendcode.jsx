import React , { useEffect } from 'react';
import Logo from '../../images/logo/logo.png';
import Vactor from '../../images/icon/vactor.png';
import { useLocation, useNavigate } from 'react-router-dom';
import {FormResendCodeEmail, FormResendCodePhone} from "../../layout/activeaccount/form_resendcode.jsx"
import { useState } from 'react';

function ResendCode() {
  const [datatype,setDatatype]=useState("");

  let navigate = useNavigate(),
     location = useLocation(),
    slicelocation = location.pathname.slice(1);

    useEffect(() => {

      
      if(slicelocation === "resendcodeemail"){
        setDatatype("Email")
      }else if(slicelocation === "resendcodephone"){
        setDatatype("Phone Number")
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
                <h5>Activate The Account ?</h5>
                <span>Enter Your {datatype}</span>
            </div>
            {slicelocation === "resendcodeemail"?
            <FormResendCodeEmail/>
            :
            <FormResendCodePhone/>
            }
        </div>
    </section>
  )
}

export default ResendCode;

