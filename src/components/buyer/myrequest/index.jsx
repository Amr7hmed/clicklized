import React, { useState } from 'react'
import EmptyRequest from '../../../layout/empty/emptyrequest.jsx';
import RequestFilter from './filter/index.jsx'
import RequestHeadr from './headr/index.jsx';
import RequestRow from './row/index.jsx'

function Requestitems(props) {
  const { Data } = props;
  const [toggle, setToggole] = useState(false);
  return (
      <div className='requestitems'>
        <div className="container">
          <RequestHeadr Title={"My requests"} Line={`${Data.length} requests`}
            Toggle={toggle} setToggole={setToggole} />
          <RequestFilter Toggle={toggle} />
          <RequestRow Data={Data} />
        </div>
      </div>
  )
}

export default Requestitems