import React from 'react';
import Datactions from './datactions.jsx';
import Datarow from './datarow.jsx';

function Tabeldata() {
  return (
    <div className='tabeldata'>
        <Datarow/>
        <Datarow/>
        <Datarow/>
        <Datarow/>
        <Datactions/>
    </div>
  )
}

export default Tabeldata