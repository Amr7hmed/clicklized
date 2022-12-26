import React from 'react';
import FilterIcon from '../../../../images/icon/icon-filter.png';
import AddRequest from "../../../../images/icon/addrequests.png";
import { NavLink } from 'react-router-dom';
import { Authcontext } from '../../../../store/context';
import { useContext } from 'react';

function RequestHeadrSeller(props) {
    const {Title ,Toggle ,setToggole}=props;

    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
  return (
    <div className="myrequestseller__headr">
        <div className="left">
        <h5>{Title}</h5>
        </div>
        <div className="right">
          <button type='button' className='btn btn-filter'
          onClick={()=>setToggole(!Toggle)}>
          {language === "Ar" ?
            <>
              فلتر
              <img src={FilterIcon} alt="Filter Icon" />
            </>
            :
            <>
              <img src={FilterIcon} alt="Filter Icon" />
              Filter
            </>
          }
          </button>
        </div>
    </div>
  )
}

export default RequestHeadrSeller;