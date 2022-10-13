import React from 'react';
import { NavLink } from 'react-router-dom';
import AddRequest from "../../../images/icon/addrequests.png";

function ChartBottom() {
  return (
    <div className='chart__bottom'>
        <h6>You don’t have any request</h6>
        <span>Start adding requests now</span>
        <NavLink to={"/createrequest"}  className='addrequests'>
            <img src={AddRequest} alt="AddRequest" />
        Add new request
        </NavLink>
    </div>
  )
}

export default ChartBottom;