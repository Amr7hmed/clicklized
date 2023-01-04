import React from 'react';
import Profile from '../../../images/icon/img-profile.jpg';
import Account from '../../../images/icon/account.png';
import { NavLink } from 'react-router-dom';
import { Signoutacount } from '../../../api/actionsauth';
import { Authcontext } from '../../../store/context';
import { useContext } from 'react';
import Language from '../../../images/icon/language-solid.svg';
import ModelLanguage from '../../../layout/modal/model_language';

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
          <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModalLanguage">
            <img src={Language} alt="Account" />
            {language === "Ar" ? "اللغة" : "Language"}
          </button>
        </li>
        <li>
            <button className='btn btn-signout' type='button' onClick={() => Signout()}>
            {language === "Ar" ? 'تسجيل الخروج' : "SIGN OUT"}
            </button>
        </li>
      </ul>
    </li>
    <ModelLanguage/>
      
      </>
  )
}

export default IconProfile;