import React  from 'react';
import Logo from '../../images/logo/logo.png';
import Vactor from '../../images/icon/vactor.png';
import FormVerification from '../../layout/verification/form.jsx';

function Verification() {
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
            <FormVerification/>
        </div>
    </section>
  )
}

export default Verification;