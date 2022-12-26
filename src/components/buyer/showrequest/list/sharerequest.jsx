import React from 'react';
import { useContext } from 'react';
import ShareIcon from "../../../../images/icon/icon_share.png";
import { Authcontext } from '../../../../store/context';

function ShareRequest() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <>
    <button type='button' className='btn btn-sharerequest'
       data-bs-toggle="modal" data-bs-target="#modalsharerequest">
            <img src={ShareIcon} alt="Share Icon" />
            {language === "Ar" ? " مشاركة الطلب" : "ShareRequest"}
        
    </button>
    </>
  )
}

export default ShareRequest