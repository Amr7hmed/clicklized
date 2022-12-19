import React from 'react';
import IconEdit from "../../../../images/icon/edit-black.png";
import IconChinge from "../../../../images/icon/changepassword.png";
import { Authcontext } from '../../../../store/context';
import { useContext } from 'react';

function GeneralTop(props) {
  const { Username } = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <div className='myprofile__top'>
      <span className="left">
        <span className="text">{Username}</span>
      </span>
      <span className='right'>
        <button className='btn btn-edit' type="button"
          data-bs-toggle="modal" data-bs-target="#modalchangepasswordbuyer">
          {language === "Ar" ?
            <>
              تغير كلمة السر
              <img src={IconChinge} alt="" />
            </>
            : <>
              <img src={IconChinge} alt="" />
              Change password
            </>
          }
        </button>

        <button className='btn btn-edit' type="button"
          data-bs-toggle="modal" data-bs-target="#modeleditprofilebuyer">
          {language === "Ar" ?
            <>
              تعديل الملف الشخصي
              <img src={IconEdit} alt="" />
            </>
            : <>
              <img src={IconEdit} alt="" />
              Edit profile
            </>
          }
        </button>
      </span>
    </div>
  )
}

export default GeneralTop