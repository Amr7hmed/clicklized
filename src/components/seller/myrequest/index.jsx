import React, { useState } from 'react'
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import EmptyRequest from '../../../layout/empty/emptyrequest.jsx';
import { Authcontext } from '../../../store/context.js';
import RequestCardSeller from './card/index.jsx';
import RequestFilterSeller from './filter/index.jsx'
import RequestHeadrSeller from './headr/index.jsx';
import RequestRowSeller from './row/index.jsx'

function RequestitemsSeller(props) {
  const { Data ,TitleEmpty} = props;
  const [toggle, setToggole] = useState(false);
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  let location = useLocation(),
      textlocation = location.pathname,
      myoffersseller = textlocation.includes("myoffersseller"),
      myrequestseller = textlocation.includes("myrequestseller");


  return (
    <div className='requestitems'>
      {Data.length === 0 ?
        <EmptyRequest TitleEmpty={TitleEmpty} />
        :
        Data.length < 4 ?

          <div className="container">
            <RequestHeadrSeller 
            Title={myrequestseller === true ? 
            <>{language === "Ar" ? "طلباتي" : "My requests"}</>
            :<>{language === "Ar" ? 'عروضي' : "My offers"}</>}
              Toggle={toggle} setToggole={setToggole} />
            <RequestFilterSeller Toggle={toggle} />
            <div className='myrequestseller__row'>
              {Data.map(item =>
                <RequestCardSeller Dataoffer={item} key={item.id} />
              )}
            </div>
          </div>
          :
          <div className="container">
            <RequestHeadrSeller 
            Title={myrequestseller === true ? <>
              {language === "Ar" ? "طلباتي" : "My requests"}
            </>:<>
            {language === "Ar" ? 'عروضي' : "My offers"}
            </>
            }
              Toggle={toggle} setToggole={setToggole} />
            <RequestFilterSeller Toggle={toggle} />

            <RequestRowSeller Data={Data} />
          </div>
      }
    </div>
  )
}

export default RequestitemsSeller;