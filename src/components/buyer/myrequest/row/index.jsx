import React from 'react';
import RequestCard from './card';
import EmptyRequest from "../../../../layout/empty/emptyrequest.jsx";

function RequestRow(props) {
 const {Data}=props;
  return (
    <div className='myrequest__row'>
    {Data.length === 0 ? 
    <EmptyRequest/>
    :
    <>
    <div className="row">
      {Data.map(item =>
          <RequestCard key={item.id} Item={item} />
      )}
    </div>
    </>
    }
  </div>
  )
}

export default RequestRow;