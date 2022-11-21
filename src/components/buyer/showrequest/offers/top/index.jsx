import React from 'react';
import FilterIcon from '../../../../../images/icon/icon-filter.png';

function OffersTop(props) {
const {Toggle ,setToggole}=props;
  return (
    <div className="offersdetiles__top">
      <h6>Offers</h6>

      <button type='button' className='btn btn-filter'
        onClick={()=>setToggole(!Toggle)}>
        <img src={FilterIcon} alt="Filter Icon" />
        Filter
      </button>
    </div>
  )
}

export default OffersTop;