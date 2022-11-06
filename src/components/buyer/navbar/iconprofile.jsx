import React from 'react';
import Profile from '../../../images/icon/img-profile.jpg';
import Account from '../../../images/icon/account.png';
import { NavLink } from 'react-router-dom';
import { Signoutacount } from '../../../api/actionsauth';

function IconProfile() {

    const Signout = () => {
        window.location.reload();
        Signoutacount();
      }

  return (<>
    <li className="nav-item dropdown iconprofile">
      <a className="nav-link dropdown-toggle" 
      data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
          <img src={Profile} alt="Profile" />
        Maged elrashid
          </a>
      <ul className="dropdown-menu">
        <li>
            <NavLink to={"/profilebuyer"}><img src={Account} alt="Account" />My Account</NavLink>
        </li>
        <li>
            <button className='btn btn-signout' type='button' onClick={() => Signout()}>SIGN OUT</button>
        </li>
      </ul>
    </li>
      
      </>
  )
}

export default IconProfile;