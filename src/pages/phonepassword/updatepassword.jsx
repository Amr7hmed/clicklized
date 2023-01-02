import React from 'react';
import Logo from '../../images/logo/logo.png';
import Vactor from '../../images/icon/vactor.png';
import FormThree from '../../layout/emailpassword/formthree';

function UpdatepasswordPhone() {
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
                <h5>Enter your password</h5>
            </div>
            
            <FormThree/>
             
        </div>
    </section>
  )
}

export default UpdatepasswordPhone;