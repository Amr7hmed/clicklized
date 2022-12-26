import React from 'react';
import { useContext } from 'react';
import Notification from "../../../images/icon/bell.png";
import IconTimer from "../../../images/icon/icon-timer.png";
import { Authcontext } from '../../../store/context';

function IconNotification() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
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
          
        {language === "Ar" ? 
        'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم' 
        :
         " Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        }
        
        </span>
        <span className="time"><img src={IconTimer} alt="" />Thu 20/02/2022, 03:30pm</span>
      </li>
      <li>
        <span className='text'>  
        {language === "Ar" ? 
        'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم' 
        :
         " Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        }
        </span>
        <span className="time"><img src={IconTimer} alt="" />Thu 20/02/2022, 03:30pm</span>
      </li>
      <li>
        <span className='text'>
        {language === "Ar" ? 
        'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم' 
        :
         " Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        }
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