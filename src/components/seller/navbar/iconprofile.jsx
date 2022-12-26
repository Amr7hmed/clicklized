import React from 'react';
import Profile from '../../../images/icon/img-profile.jpg';
import Account from '../../../images/icon/account.png';
import { NavLink } from 'react-router-dom';
import { Signoutacount } from '../../../api/actionsauth';
import { Authcontext } from '../../../store/context';
import { useContext } from 'react';

function IconProfile() {

  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

    const Signout = () => {
      Signoutacount();
      }

  return (<>
    <li className="nav-item dropdown iconprofile">
      <a className="nav-link dropdown-toggle" 
      data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
          <img src={Profile} alt="Profile" />
          {language === "Ar" ? 'ماجد الرشيد' : "Maged elrashid"}
          </a>
      <ul className="dropdown-menu">
        <li>
            <NavLink to={"/profileseller"}><img src={Account} alt="Account" />
            {language === "Ar" ? 'حسابي' : "My Account"}
            </NavLink>
        </li>
        <li>
            <button className='btn btn-signout' type='button' onClick={() => Signout()}>
            {language === "Ar" ? 'تسجيل الخروج' : "SIGN OUT"}
            </button>
        </li>
      </ul>
    </li>
      
      </>
  )
}

export default IconProfile;