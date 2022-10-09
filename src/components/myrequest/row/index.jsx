import React from 'react';
import RequestCard from './card';

function RequestRow() {
    const Data=[
        {id:1,name:"Request name",time:"20/02/2022"},
        {id:2,name:"Request name",time:"20/02/2022"},
        {id:3,name:"Request name",time:"20/02/2022"},
        {id:4,name:"Request name",time:"20/02/2022"},
        {id:5,name:"Request name",time:"20/02/2022"},
        {id:6,name:"Request name",time:"20/02/2022"},
    ]
  return (
    <div className='myrequest__row'>
        <div className="row">
            {Data.map(item=>
        <RequestCard key={item.id} Item={item}/>
                )}
        </div>
    </div>
  )
}

export default RequestRow;