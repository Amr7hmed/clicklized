import React from 'react'
import { useContext } from 'react';
import { Authcontext } from '../../../store/context';
import Arbiecicon from '../../../images/icon/Saudi-arabia-icon.png';
import Engilshicon from '../../../images/icon/USA-icon.png';


function IconLanguage() {
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
    const setLanguage = authcontext.setLanguage;

    const changelanguage = () => {
        if (language === "En") {
            setLanguage("Ar")
            localStorage.setItem("languagecklized", JSON.stringify("Ar"));
        } else {
            setLanguage("En")
            localStorage.removeItem("languagecklized");
        }
    }

  return (
    <div className="changelanguage">

    <div className="d-flex">
        <ul>
            <li className={language === "Ar" ? 'not_active' : null} onClick={changelanguage}>
                <img src={Arbiecicon} alt="Arbiec icon" />
                <span className="text">Ar</span>
            </li>
            <li className={language === "En" ? 'not_active' : null} onClick={changelanguage}>
                <img src={Engilshicon} alt="Engilsh icon" />
                <span className="text">En</span>
            </li>
        </ul>
    </div>
    </div>
  )
}

export default IconLanguage;