import React from 'react';
import { useLocation } from 'react-router-dom';
import Datactions from './datactions.jsx';
import Datarow from './datarow.jsx';

function Tabeldata() {

  let location = useLocation(),
  textlocation = location.pathname,
  resultseller = textlocation.includes("seller");

  return (
    <div className='tabeldata'>
        <Datarow/>
        <Datarow/>
        <Datarow/>
        <Datarow/>
        
      {resultseller === true ? "" :
        <Datactions/>
      }
    </div>
  )
}

export default Tabeldata