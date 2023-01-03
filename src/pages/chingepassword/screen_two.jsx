import React, { useContext, useEffect } from 'react';
import Logo from '../../images/logo/logo.png';
import Vactor from '../../images/icon/vactor.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../store/context';
import { FormEmailTwo, FormPhoneTwo } from '../../layout/chingepassword/form_two.jsx';



function ForgetPasswordCode() {
  const authcontext = useContext(Authcontext);
  const phone = authcontext.phone;
  const email = authcontext.email;

  let navigate = useNavigate(),
    location = useLocation(),
    slicelocation = location.pathname.slice(1);

  useEffect(() => {
    // Page Chinge Password Phone
    if (slicelocation === "passwordcodephone") {
      if (phone === "") {
        navigate(`/forgetpasswordphone`);
      } else {
      }
      // Page Chinge Password Email
    } else if (slicelocation === "passwordcodeemail") {

      if (email === "") {
        navigate(`/forgetpasswordemail`);
      } else {
      }

    } else {
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
          <h5>Enter verification code</h5>
        </div>
        {slicelocation === "passwordcodephone" ?
          <FormPhoneTwo />
          :
          <FormEmailTwo />
        }
      </div>
    </section>
  )
}

export default ForgetPasswordCode;