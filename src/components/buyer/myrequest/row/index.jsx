import React from 'react';
import RequestCard from './card';

function RequestRow() {
  const Data = [
    { id: 1, name: "32525", time: "20/02/2022" },
    { id: 2, name: "32526", time: "20/02/2022" },
    { id: 3, name: "32527", time: "20/02/2022" },
    { id: 4, name: "32527", time: "20/02/2022" },
    { id: 5, name: "32529", time: "20/02/2022" },
    { id: 6, name: "32532", time: "20/02/2022" },
  ]
  return (
    <div className='myrequest__row'>
      <div className="row">
        {Data.map(item =>
          <RequestCard key={item.id} Item={item} />
        )}
      </div>
    </div>
  )
}

export default RequestRow;