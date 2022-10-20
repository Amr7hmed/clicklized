import React from 'react';
import FilterIcon from '../../../../images/icon/icon-filter.png';
import AddRequest from "../../../../images/icon/addrequests.png";
import { NavLink } from 'react-router-dom';

function RequestHeadrSeller(props) {
    const {Title ,Toggle ,setToggole}=props;
  return (
    <div className="myrequestseller__headr">
        <div className="left">
        <h5>{Title}</h5>
        </div>
        <div className="right">
          <button type='button' className='btn btn-filter'
          onClick={()=>setToggole(!Toggle)}>
            <img src={FilterIcon} alt="Filter Icon" />
            Filter
          </button>
        </div>
    </div>
  )
}

export default RequestHeadrSeller;