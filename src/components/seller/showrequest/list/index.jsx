import React from 'react'
import ButtonList from './buttonlist';
import ShareRequest from './sharerequest';
import ModalShare from "./modalshare.jsx";

function NavList(props) {
    const {stylebuttons,id , name ,setParamsname ,setStylebuttons}=props;
  return (
    <div className='navlist'>
      <ButtonList setStylebuttons={setStylebuttons}
      id={id} name={name}
      Stylebuttons={stylebuttons}
      setParamsname={setParamsname}/>
      <ShareRequest/>
      <ModalShare/>
    </div>
  )
}

export default NavList;