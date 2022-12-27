import React from 'react'
import ButtonList from './buttonlist';
import ShareRequest from './sharerequest';
import ModalShare from "./modalshare.jsx";

function NavList(props) {
    const {Stylebuttons ,id , name ,paramsdata,setParamsdata}=props;
    console.log(paramsdata);
  return (
    <div className='navlist'>
      <ButtonList Stylebuttons={Stylebuttons}
      id={id} name={name}  paramsdata={paramsdata} setParamsdata={setParamsdata} />
      <ShareRequest/>
      <ModalShare/>
    </div>
  )
}

export default NavList;