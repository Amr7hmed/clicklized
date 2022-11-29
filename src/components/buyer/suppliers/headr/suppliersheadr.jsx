import React from 'react';
import FilterIcon from '../../../../images/icon/icon-filter.png';
import AddRequest from "../../../../images/icon/addrequests.png";
import { NavLink } from 'react-router-dom';

function SuppliersHeadr(props) {
    const {Title , Line ,Toggle ,setToggole,Data}=props;
  return (
    <div className="mysuppliers__headr">
        <div className="left">
        <h5>{Title}</h5>
        <span>{Line}</span>
        </div>
        <div className="right">
          <button  type='button' className='btn btn-suppliers'
          data-bs-toggle="modal" data-bs-target={"#modeladdsuppliers"}>
            <img src={AddRequest} alt="Request Icon" />
            Add new supplier
          </button>
          
        {Data.length === 0 ? "" :
          <button type='button' className='btn btn-filter'
          onClick={()=>setToggole(!Toggle)}>
            <img src={FilterIcon} alt="Filter Icon" />
            Filter
          </button>
        }
        </div>
    </div>
  )
}

export default SuppliersHeadr;