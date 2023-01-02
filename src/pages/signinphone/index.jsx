import React from 'react';
import Logo from '../../images/logo/logo.png';
import Vactor from '../../images/icon/vactor.png';
import FormSignInPhone from '../../layout/signinphone/form';


function SignInPhone() {
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
                <h5>Welcome to clicklized</h5>
                <span>Sign in now</span>
            </div>
            <FormSignInPhone/>
        </div>
    </section>
  )
}

export default SignInPhone;
