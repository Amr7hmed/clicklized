import React, { useEffect, useState} from 'react';
import { GetuserTypes } from '../../api/actionsauth';
import Vactor from '../../images/icon/vactor.png';
import Logo from '../../images/logo/logo.png';
import FormSignup from '../../layout/signup/form';

function Signup() {
    const [userTypes, setUserTypes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        GetuserTypes(setUserTypes,setLoading);
    }, [loading]);

    return (<>
        {loading === false ? (
          ""
        ) : (
        <section className='signup'>
            <div className="vactor">
                <img src={Vactor} alt="vactor" />
            </div>
            <div className="signup__data">
                <div className="signup__header">
                    <div className="img"><img src={Logo} alt="" /></div>
                    <h5> Sign up</h5>
                </div>
                <FormSignup userTypes={userTypes}/>
            </div>
        </section>
    )}
  </>
    )
}

export default Signup;