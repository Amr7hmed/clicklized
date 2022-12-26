import React from 'react'
import { useContext } from 'react';
import { Authcontext } from '../../../../../store/context';

function Datactions() {
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
  return (
    <ul>
        <li>
            <button className='btn'>{language === "Ar" ? "قبول" : "ACCEPT"}</button>
        </li>
        <li>
            <button className='btn'>{language === "Ar" ? "قبول" : "ACCEPT"}</button>
        </li>
        <li>
            <button className='btn'>{language === "Ar" ? "قبول" : "ACCEPT"}</button>
        </li>
        <li>
            <button className='btn'>{language === "Ar" ? "قبول" : "ACCEPT"}</button>
        </li>
        <li>
            <button className='btn'>{language === "Ar" ? "قبول" : "ACCEPT"}</button>
        </li>
        <li>
            <button className='btn'>{language === "Ar" ? "قبول" : "ACCEPT"}</button>
        </li>
        <li>
            <button className='btn'>{language === "Ar" ? "قبول" : "ACCEPT"}</button>
        </li>
        <li>
            <button className='btn'>{language === "Ar" ? "قبول" : "ACCEPT"}</button>
        </li>
    </ul>
  )
}

export default Datactions;