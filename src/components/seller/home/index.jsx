import React, { useState } from 'react'
import EmptyRequest from '../../../layout/empty/emptyrequest.jsx';
import HomeRequestsFilter from '../../buyer/myrequest/filter/index.jsx';
import HomeRequestsHeadr from './detiles/headr/index.jsx';
import HomeRequestsRow from './detiles/row/index.jsx';

function HomeRequests(props) {
  const { Data } = props;
  const [toggle, setToggole] = useState(false);
  return (<>
    {Data.length === 0 ?
      <EmptyRequest />
      :
      <section className='homerequests'>
        <div className="container">
          <HomeRequestsHeadr Title={"My requests"} Line={`${Data.length} requests`}
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
