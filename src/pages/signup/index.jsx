import React, { useContext } from 'react';
import Vactor from '../../images/icon/vactor.png';
import Logo from '../../images/logo/logo.png';
import FormSignup from '../../layout/signup/form';

function Signup() {

    return (
        <section className='signup'>
            <div className="vactor">
                <img src={Vactor} alt="vactor" />
            </div>
            <div className="signup__data">
                <div className="signup__header">
                    <div className="img"><img src={Logo} alt="" /></div>
                    <h5> Sign up</h5>
                </div>
                <FormSignup/>
            </div>
        </section>
    )
}

export default Signup;