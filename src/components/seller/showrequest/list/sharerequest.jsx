import React from 'react';
import ShareIcon from "../../../../images/icon/icon_share.png";

function ShareRequest() {
  return (
    <>
    <button type='button' className='btn btn-sharerequest'
       data-bs-toggle="modal" data-bs-target="#modalsharerequest">
            <img src={ShareIcon} alt="Share Icon" />
        ShareRequest
    </button>
    </>
  )
}

export default ShareRequest