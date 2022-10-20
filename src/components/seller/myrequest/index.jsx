import React, { useState } from 'react'
import RequestFilterSeller from './filter/index.jsx'
import RequestHeadrSeller from './headr/index.jsx';
import Paginate from './paginate/index.jsx';
import RequestRowSeller from './row/index.jsx'

function RequestitemsSeller() {
  const [toggle,setToggole]=useState(false);
  return (
    <div className='requestitems'>
      <div className="container">
            <RequestHeadrSeller Title={"My requests"}
            Toggle={toggle} setToggole={setToggole}/>
            <RequestFilterSeller Toggle={toggle}/>
            <RequestRowSeller/>
            <Paginate/>
      </div>
    </div>
  )
}

export default RequestitemsSeller;