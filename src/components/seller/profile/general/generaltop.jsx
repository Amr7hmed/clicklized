import React from 'react';
import IconEdit from "../../../../images/icon/edit-black.png";
import IconChinge from "../../../../images/icon/changepassword.png";

function GeneralTop(props) {
  const {Username}=props;
  return (
    <div className='myprofileseller__top'>
        <span className="left">
          <span className="text">{Username}</span>
          </span>
          <span className='right'>
            <button className='btn btn-edit' type="button" 
            data-bs-toggle="modal" data-bs-target="#modalchangepasswordseller">
              <img src={IconChinge} alt="" />
              Change password
            </button>

            <button className='btn btn-edit' type="button" 
            data-bs-toggle="modal" data-bs-target="#modeleditprofileseller">
              <img src={IconEdit} alt="" />
            Edit profile
            </button>
          </span>
    </div>
  )
}

export default GeneralTop