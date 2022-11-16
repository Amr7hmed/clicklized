import React from 'react';
import Logo from '../../images/logo/logo.png';
import Vactor from '../../images/icon/vactor.png';
import FormSignIn from '../../layout/signin/form';
import { useEffect } from 'react';

function SignIn() {
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
            <FormSignIn/>
        </div>
    </section>
  )
}

export default SignIn;
