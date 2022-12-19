import React, { useState } from 'react'
import { useContext } from 'react';
import EmptyRequest from '../../../layout/empty/emptyrequest.jsx';
import { Authcontext } from '../../../store/context.js';
import RequestFilter from './filter/index.jsx'
import RequestHeadr from './headr/index.jsx';
import RequestRow from './row/index.jsx'

function Requestitems(props) {
  const { Data } = props;
  const [toggle, setToggole] = useState(false);
  
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  return (
    <div className='requestitems'>
      {Data.length === 0 ?

        <EmptyRequest />

        :
        <div className="container">
          <RequestHeadr Title=
          {language === "Ar" ? "طلباتي" : "My requests"}
           Line={language === "Ar" ? `طلب ${Data.length}` : `${Data.length} requests`}
            Toggle={toggle} setToggole={setToggole} />
          <RequestFilter Toggle={toggle} />
          <RequestRow Data={Data} />
        </div>
      }
    </div>
  )
}

export default Requestitems