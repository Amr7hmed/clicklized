import React, { useState } from 'react'
import RequestFilter from './filter/index.jsx'
import RequestHeadr from './headr/index.jsx';
import RequestRow from './row/index.jsx'

function Requestitems() {
  const [toggle,setToggole]=useState(false);
  return (
    <div className='requestitems'>
      <div className="container">
            <RequestHeadr Title={"My requests"} Line={"7 requests"}
            Toggle={toggle} setToggole={setToggole}/>
            <RequestFilter Toggle={toggle}/>
            <RequestRow/>
      </div>
    </div>
  )
}

export default Requestitems