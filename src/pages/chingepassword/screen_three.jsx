import React, { useContext, useEffect } from 'react';
import Logo from '../../images/logo/logo.png';
import Vactor from '../../images/icon/vactor.png';
import FormThree from '../../layout/chingepassword/form_three.jsx';
import { Authcontext } from '../../store/context';
import { Signoutacount } from '../../api/actionsauth.js';

function Updatepassword() {
  const authcontext = useContext(Authcontext);
  const code = authcontext.code;


  useEffect(() => {

    if(code === ""){
      Signoutacount();
    }else{

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
                <h5>Enter your password</h5>
            </div>
            
             <FormThree/>
        </div>
    </section>
  )
}

export default Updatepassword;