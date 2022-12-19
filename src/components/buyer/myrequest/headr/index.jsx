import React from 'react';
import FilterIcon from '../../../../images/icon/icon-filter.png';
import AddRequest from "../../../../images/icon/addrequests.png";
import { NavLink } from 'react-router-dom';
import { Authcontext } from '../../../../store/context';
import { useContext } from 'react';

function RequestHeadr(props) {
    const {Title , Line ,Toggle ,setToggole}=props;
    
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  return (
    <div className="myrequest__headr">
        <div className="left">
        <h5>{Title}</h5>
        <span>{Line}</span>
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
          <NavLink to={"/addrequestbuyer"}  type='button' className='btn btn-request'>
            
          {language === "Ar" ?
            <>
            إضافة طلب جديد
            <img src={AddRequest} alt="Request Icon" />
            </>
            :
            <>
            <img src={AddRequest} alt="Request Icon" />
            Add new request
            </>
          }
          </NavLink>
        </div>
    </div>
  )
}

export default RequestHeadr;