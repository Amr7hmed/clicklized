import React from 'react';
import RequestCardSeller from '../card';

function RequestRowSeller() {
  const Dataoffer = [
    { id: 1, name: "32525", day: "02 Feb 2022" , price:"32000 SAR" , details:"Details here, Details here,Details here,Details here,Details here"},
    { id: 2, name: "32526", day: "02 Feb 2022" , price:"32000 SAR" , details:"Details here, Details here,Details here,Details here,Details here"},
    { id: 3, name: "32527", day: "02 Feb 2022" , price:"32000 SAR" , details:"Details here, Details here,Details here,Details here,Details here"},
    { id: 4, name: "32527", day: "02 Feb 2022" , price:"32000 SAR" , details:"Details here, Details here,Details here,Details here,Details here"},
  ]
  return (
    <div className='myrequestseller__row'>
        {Dataoffer.map(item =>
        <RequestCardSeller Dataoffer={item} key={item.id}/>
          )}
    </div>
  )
}

export default RequestRowSeller;