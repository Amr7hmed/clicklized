import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import IconLeft from '../../../../images/icon/arrow-left.svg';
import { Authcontext } from '../../../../store/context';

function Head(props) {
  const {StyleScreen ,setParamsname}=props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  return (
    <div className="head">
      {StyleScreen === "createissue_top"?

      <button className='btn btn-back'  onClick={() => { setParamsname(""); }}>
      <img src={IconLeft} alt="Icon Left" className='iconleft'/>
      </button>
      
      :StyleScreen === "createreviewdata_top"?
      
      <button className='btn btn-back'  onClick={() => { setParamsname("createissue"); }}>
      <img src={IconLeft} alt="Icon Left" className='iconleft'/>
      </button>
      :""}
        <h4>
          {language === "Ar" ? "إنشاء طلب جديد" : "Create new issue"}
          </h4>
    </div>
  )
}

export default Head;


// <button className='btn btn-cancel' >