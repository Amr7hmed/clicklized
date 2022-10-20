import React, { useState } from 'react'
import HomeRequestsFilter from '../../buyer/myrequest/filter/index.jsx';
import HomeRequestsHeadr from './detiles/headr/index.jsx';
import HomeRequestsRow from './detiles/row/index.jsx';

function HomeRequests() {
    const [toggle,setToggole]=useState(false);
  return (
    <section className='homerequests'>
        <div className="container">
            <HomeRequestsHeadr Title={"My requests"} Line={"7 requests"}
              Toggle={toggle} setToggole={setToggole}/>
            <HomeRequestsFilter Toggle={toggle}/>
            <HomeRequestsRow/>
        </div>
    </section>
  )
}

export default HomeRequests;
