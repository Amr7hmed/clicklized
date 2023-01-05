import React, { useState } from 'react';
import { useContext } from 'react';
import { Authcontext } from '../../../store/context.js';
import EmptyShowRequest from '../../empty/emptyshowrequest.jsx';

import OffersFilter from './filter';
import OffersTabel from './tabel';
import OffersTop from './top';

function OffersDetiles(props) {
  const { Data } = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const [toggle, setToggole] = useState(false);
  return (<>
    <div className='offersbottom'>
      <div className=
      {Data.offers.length === 1 ? "offersdetiles offersdetilesemptiy" : "offersdetiles"}>
        <OffersTop Toggle={toggle} setToggole={setToggole} offers={Data.offers}/>
        <OffersFilter Toggle={toggle} />
        {Data.offers.length === 1 ?
          <EmptyShowRequest 
          Data={language === "Ar" ? "لا توجد عروض حتي الأن" : "There is no Offers yet"}/>
          :
          <div className="offerscontener">
            <OffersTabel />
          </div>
        }
      </div>
    </div>
  </>
  )
}

export default OffersDetiles;