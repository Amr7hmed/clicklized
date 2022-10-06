import React from 'react';
import Notification from "../../images/icon/bell.png";
import IconTimer from "../../images/icon/icon-timer.png";

function IconNotification() {
  return (
    <>
  <li className="nav-item dropdown iconnotification">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
        <img src={Notification} alt="Notification" />
        </a>
    <ul className="dropdown-menu">
      <div>
      <li>
        <span className='text'>
        Notification content here,Notification content here,Notification content here.
        </span>
        <span className="time"><img src={IconTimer} alt="" />Thu 20/02/2022, 03:30pm</span>
      </li>
      <li>
        <span className='text'>
        Notification content here,Notification content here,Notification content here.
        </span>
        <span className="time"><img src={IconTimer} alt="" />Thu 20/02/2022, 03:30pm</span>
      </li>
      <li>
        <span className='text'>
        Notification content here,Notification content here,Notification content here.
        </span>
        <span className="time"><img src={IconTimer} alt="" />Thu 20/02/2022, 03:30pm</span>
      </li>
      </div>
    </ul>
  </li>
    
    </>
  )
}

export default IconNotification;