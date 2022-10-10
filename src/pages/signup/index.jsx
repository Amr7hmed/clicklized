import React, { useContext } from 'react';
import Vactor from '../../images/icon/vactor.png';
import { Authcontext } from '../../store/context';
import Logo from '../../images/logo/logo.png';
import FormSignup from '../../layout/signup/form';

function Signup() {
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;

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