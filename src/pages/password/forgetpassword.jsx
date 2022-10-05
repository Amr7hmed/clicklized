import React from 'react';
import Logo from '../../images/logo/logo.png';
import Vactor from '../../images/icon/vactor.png';
import FormSignIn from '../../components/signin/form';
import FormOne from '../../components/password/formone';

function ForgetPassword() {
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
                <span>Enter your email</span>
            </div>
            <FormOne/>
        </div>
    </section>
  )
}

export default ForgetPassword;