import React  from 'react';
import Logo from '../../images/logo/logo.png';
import Vactor from '../../images/icon/vactor.png';
import FormVerificationPhone from '../../layout/verificationphone/form';

function VerificationPhone() {
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
            <FormVerificationPhone/>
        </div>
    </section>
  )
}

export default VerificationPhone;