import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import IconLeft from '../../../../images/icon/arrow-left.svg';
import { Authcontext } from '../../../../store/context';

function Head(props) {
  const {StyleScreen}=props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  return (
    <div className="head">
      {StyleScreen === "createrequest_top"?

      ""
      :StyleScreen === "createissue_top"?

      <NavLink to={"/createrequest"}>
      <img src={IconLeft} alt="Icon Left" className='iconleft'/>
      </NavLink>
      
      :StyleScreen === "createreviewdata_top"?
      
      <NavLink to={"/createissue"}>
      <img src={IconLeft} alt="Icon Left" className='iconleft'/>
      </NavLink>
      :
      <NavLink to={"/"}>
      <img src={IconLeft} alt="Icon Left" className='iconleft'/>
      </NavLink>
      }
        <h4>
          {language === "Ar" ? "إنشاء طلب جديد" : "Create new issue"}
          </h4>
    </div>
  )
}

export default Head;