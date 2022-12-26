import React, { useContext } from 'react'
import { Authcontext } from '../../../../../store/context';
import Tabeldata from './tabeldata'

function Tabelbody() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <div className='tabelbody'>
      <ul className="top">
        <li>{language === "Ar" ? "البائع 1" : "Seller  1"}</li>
        <li>{language === "Ar" ? "البائع 2" : "Seller  2"}</li>
        <li>{language === "Ar" ? "البائع 3" : "Seller  3"}</li>
        <li>{language === "Ar" ? "البائع 4" : "Seller  4"}</li>
        <li>{language === "Ar" ? "البائع 5" : "Seller  5"}</li>
        <li>{language === "Ar" ? "البائع 6" : "Seller  6"}</li>
        <li>{language === "Ar" ? "البائع 7" : "Seller  7"}</li>
        <li>{language === "Ar" ? "البائع 8" : "Seller  8"}</li>
      </ul>
      <Tabeldata />
    </div>
  )
}

export default Tabelbody