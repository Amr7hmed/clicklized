import React, { useState } from 'react';
import OffersFilter from './filter';
import OffersTabel from './tabel';
import OffersTop from './top';

function OffersDetiles() {
  const [toggle,setToggole]=useState(false);
  return (
    <div className='offersbottom'>
      <div className="offersdetiles">
        <OffersTop Toggle={toggle} setToggole={setToggole}/>
        <OffersFilter Toggle={toggle}/>
        <div className="offerscontener">
          <OffersTabel/>
        </div>
      </div>
    </div>
  )
}

export default OffersDetiles;