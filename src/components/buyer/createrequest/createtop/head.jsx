import React from 'react';
import { NavLink } from 'react-router-dom';
import IconLeft from '../../../../images/icon/arrow-left.svg';

function Head(props) {
  const {StyleScreen}=props;
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
        <h4>Create new issue</h4>
    </div>
  )
}

export default Head;