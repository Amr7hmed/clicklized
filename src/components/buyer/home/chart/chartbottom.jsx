import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AddRequest from "../../../../images/icon/addrequests.png";
import { Authcontext } from '../../../../store/context';

function ChartBottom(props) {
  const { Data } = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  return (
    <div className='chart__bottom'>
      {Data.length === 0 ?
        <>
          <h6>
            {language === "Ar" ? "ليس لديك أي طلب" : "You don’t have any request"}
          </h6>
          <span>
            {language === "Ar" ? "ابدأ بإضافة الطلبات الآن" : "Start adding requests now"}
          </span>
        </>
        :""}
      <NavLink to={"/addrequestbuyer"} className='addrequests'>
        {language === "Ar" ?
          <>
            إضافة طلب جديد
            <img src={AddRequest} alt="AddRequest" />
          </>
          :
          <>
            <img src={AddRequest} alt="AddRequest" />
            Add new request
          </>
        }
      </NavLink>
    </div>
  )
}

export default ChartBottom;