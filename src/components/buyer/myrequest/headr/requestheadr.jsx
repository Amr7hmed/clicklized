import React from 'react';
import FilterIcon from '../../../../images/icon/icon-filter.png';
import AddRequest from "../../../../images/icon/addrequests.png";
import { NavLink } from 'react-router-dom';

function RequestHeadr(props) {
    const {Title , Line ,Toggle ,setToggole}=props;
  return (
    <div className="myrequest__headr">
        <div className="left">
        <h5>{Title}</h5>
        <span>{Line}</span>
        </div>
        <div className="right">
          <button type='button' className='btn btn-filter'
          onClick={()=>setToggole(!Toggle)}>
            <img src={FilterIcon} alt="Filter Icon" />
            Filter
          </button>
          <NavLink to={"/createrequest"}  type='button' className='btn btn-request'>
            <img src={AddRequest} alt="Request Icon" />
            Add new request
          </NavLink>
        </div>
    </div>
  )
}

export default RequestHeadr;