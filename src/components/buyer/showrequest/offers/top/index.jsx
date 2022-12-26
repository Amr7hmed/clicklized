import React from 'react';
import { useContext } from 'react';
import FilterIcon from '../../../../../images/icon/icon-filter.png';
import { Authcontext } from '../../../../../store/context';

function OffersTop(props) {
const {Toggle ,setToggole}=props;
const authcontext = useContext(Authcontext);
const language = authcontext.language;
  return (
    <div className="offersdetiles__top">
      <h6>
        {language === "Ar" ? "العروض" : "Offers"}
      </h6>

      <button type='button' className='btn btn-filter'
        onClick={()=>setToggole(!Toggle)}>
        <img src={FilterIcon} alt="Filter Icon" />
        {language === "Ar" ? "فلتر" : "Filter"}
      </button>
    </div>
  )
}

export default OffersTop;