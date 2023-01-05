import React from 'react';

import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Authcontext } from '../../../../store/context';

function Tabellist() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  let location = useLocation(),
      textlocation = location.pathname,
      resultseller = textlocation.includes("seller");

  return (
    <div className='tabellist'>
      <ul>
        
      {resultseller === true ? "" :
        <li className='firstlist'></li>
      }
        <li className='itemlist'>
          {language === "Ar" ? "أسم العنصر" : "Item name"}
        </li>
        <li className='itemlist'>
          {language === "Ar" ? "أسم العنصر" : "Item name"}
        </li>
        <li className='itemlist'>
          {language === "Ar" ? "أسم العنصر" : "Item name"}
        </li>
        <li className='itemlist'>
          {language === "Ar" ? "أسم العنصر" : "Item name"}
        </li>
        
      {resultseller === true ? "" :
        <li className='actionlist'>
          {language === "Ar" ? "الأجراء" : "ACTIONS"}
          </li>
      }
      </ul>
        </div>
  )
}

export default Tabellist