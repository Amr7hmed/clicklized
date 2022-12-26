import React, { useContext } from 'react'
import { Authcontext } from '../../../../store/context.js';
import Formprofileseller from '../form/profile.jsx';

function ModelEditprofile(props) {
  const {Data}=props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <div className="modal fade"
    id="modeleditprofileseller" tabIndex="-1" 
    aria-labelledby="modeleditprofilesellerLabel" aria-hidden="true">
        <div 
        className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modeleditprofilesellerLabel">
                        {language === "Ar" ?"تعديل معلومات الشركة":"Edit Company Information"}
                    </h5>
                </div>

                <Formprofileseller Data={Data}/>
            </div>
        </div>
    </div>
  )
}

export default ModelEditprofile;