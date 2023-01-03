import React, { useContext, useState } from 'react';
import { Authcontext } from '../../store/context';
import { ChangeLang } from '../../api/profile.js'

function ModelLanguage() {

  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

    
  const ChingeLang = () => {
   console.log(language);
   if(language === "Ar"){
    ChangeLang("en")
   }else{
    ChangeLang("ar")
   }
}
  return (
    <div className="modal fade modelgallanguage"
      id={`exampleModalLanguage`} tabIndex="-1"
      aria-labelledby="exampleModalLanguage" aria-hidden="true">
      <div
        className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <h6>{language === "Ar" ? "اللغة" : "Language"}</h6>
            <button className='btn' onClick={ChingeLang}>
              {language === "Ar" ? "English" : "العربية"}
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ModelLanguage;