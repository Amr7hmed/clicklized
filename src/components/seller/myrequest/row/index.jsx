import React from 'react';
import RequestCardSeller from '../card';

function RequestRowSeller(props) {
  const { Data } = props;
  return (
    <div className='myrequestseller__row'>
        {Data.map(item =>
        <RequestCardSeller Dataoffer={item} key={item.id}/>
          )}
    </div>
  )
}

export default RequestRowSeller;