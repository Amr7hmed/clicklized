import React from 'react';
import HomeRequestsCard from './card';

function HomeRequestsRow() {
  const Data = [
    { id: 1, name: "3586", time: "20/02/2022",offer:1},
    { id: 2, name: "3587", time: "20/02/2022",offer:1},
    { id: 3, name: "3588", time: "20/02/2022",offer:1},
    { id: 4, name: "3589", time: "20/02/2022",offer:1},
    { id: 5, name: "3590", time: "20/02/2022",offer:1},
    { id: 6, name: "3591", time: "20/02/2022",offer:0},
  ]
  return (
    <div className='homerequests__row'>
      <div className="row">
        {Data.map(item =>
          <HomeRequestsCard key={item.id} Item={item} />
        )}
      </div>
    </div>
  )
}

export default HomeRequestsRow;