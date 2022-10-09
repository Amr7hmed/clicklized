import React from 'react';
import AddRequest from "../../../images/icon/addrequests.png";

function ChartBottom() {
  return (
    <div className='chart__bottom'>
        <h6>You don’t have any request</h6>
        <span>Start adding requests now</span>
        <button className='addrequests btn'>
            <img src={AddRequest} alt="AddRequest" />
        Add new request
        </button>
    </div>
  )
}

export default ChartBottom;