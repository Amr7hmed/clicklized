import React from 'react';
import Logo from '../../images/logo/logo.png';
import Vactor from '../../images/icon/vactor.png';
import { FormVerification, FormVerificationPhone } from '../../layout/activeaccount/form_verification.jsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Authcontext } from '../../store/context';
import { useContext } from 'react';

function Verification() {
  const authcontext = useContext(Authcontext),
    email = authcontext.email,
    phone = authcontext.phone;

  let navigate = useNavigate(),
    location = useLocation(),
    slicelocation = location.pathname.slice(1);

  useEffect(() => {
    console.log(phone);

    if (slicelocation === "verificationemail") {

      if (email === "") {
        navigate(`/resendcodeemail`);
      } else {
      }

    } else if (slicelocation === "verificationphone") {

      if (phone === "") {
        navigate(`/resendcodephone`);
      } else {
      }

    } else {
      navigate(`/signup`);
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

        {slicelocation === "verificationemail" ?
          <FormVerification />
          :
          <FormVerificationPhone />
        }
      </div>
    </section>
  )
}

export default Verification;