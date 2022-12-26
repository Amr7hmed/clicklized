import React from 'react';
import { Authcontext } from '../../../../../store/context';
import { useContext } from 'react';

function Tabellist() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <div className='tabellist'>
      <ul>
        <li className='firstlist'></li>
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
        <li className='actionlist'>
          {language === "Ar" ? "الأجراء" : "ACTIONS"}
          </li>
      </ul>
        </div>
  )
}

export default Tabellist