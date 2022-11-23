import React, { useState } from 'react'
import EmptyRequest from '../../../layout/empty/emptyrequest.jsx';
import RequestFilterSeller from './filter/index.jsx'
import RequestHeadrSeller from './headr/index.jsx';
import Paginate from './paginate/index.jsx';
import RequestRowSeller from './row/index.jsx'

function RequestitemsSeller(props) {
  const { Data } = props;
  const [toggle, setToggole] = useState(false);
  return (
    <div className='requestitems'>
      <div className="container">
        <RequestHeadrSeller Title={"My requests"}
          Toggle={toggle} setToggole={setToggole} />
        <RequestFilterSeller Toggle={toggle} />
        <>
          {Data.length === 0 ?
            <EmptyRequest />
            :
            <>
              <RequestRowSeller  Data={Data} />
              <Paginate Data={Data} />
            </>}
        </>
      </div>
    </div>
  )
}

export default RequestitemsSeller;