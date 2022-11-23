import React from 'react';
import { useState } from 'react';
import HomeRequestsCard from './card';

function HomeRequestsRow(props) {
  const {Data}=props;
  let Newdata=[];
  var Datareverse = [...Data].reverse();

  for (let i = 0; i < 6; i++) {
    Newdata.push(Datareverse[i])
  }

  function removeChars(element, index, array) {
    return (element !== undefined);
  }

  var Datarequest = Newdata.filter(removeChars);
  

  return (
    <div className='homerequests__row'>
      <div className="row">
        {Datarequest.map(item  =>
          <HomeRequestsCard key={item.id} Item={item} />
        )}
      </div>
    </div>
  )
}

export default HomeRequestsRow;