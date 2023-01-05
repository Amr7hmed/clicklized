import React, { useContext, useState } from 'react'
import EmptyRequest from '../../../layout/empty/emptyrequest.jsx';
import { Authcontext } from '../../../store/context.js';
import HomeRequestsFilter from '../../buyer/myrequest/filter/index.jsx';
import HomeRequestsHeadr from './detiles/headr/index.jsx';
import HomeRequestsRow from './detiles/row/index.jsx';

function HomeRequests(props) {
  const { Data } = props;
  const [toggle, setToggole] = useState(false);

  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  return (<>
    {Data.length === 0 ?
      <EmptyRequest 
      TitleEmpty={language === "Ar" ? 
      "لا توجد أي طلبات حتى الآن"
      : "There are no requests yet"}/>
      :
      <section className='homerequests'>
        <div className="container">
          <HomeRequestsHeadr Title=
          {language === "Ar" ? "طلباتي" : "My requests"}
          Line={language === "Ar" ? `طلب ${Data.length}` : `${Data.length} requests`}
            Toggle={toggle} setToggole={setToggole} />
          <HomeRequestsFilter Toggle={toggle} />
          <HomeRequestsRow Data={Data} />
        </div>
      </section>
    }
  </>
  )
}

export default HomeRequests;
