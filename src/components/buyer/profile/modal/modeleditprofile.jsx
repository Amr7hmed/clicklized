import React, { useContext } from 'react'
import { Authcontext } from '../../../../store/context';
import Formprofile from '../form/profile';

function ModelEditprofile(props) {
  const {Data}=props;
  
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <div className="modal fade"
    id="modeleditprofilebuyer" tabIndex="-1" 
    aria-labelledby="modeleditprofilebuyerLabel" aria-hidden="true">
        <div 
        className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modeleditprofilebuyerLabel">
                    {language === "Ar" ?"تعديل معلومات الشركة":"Edit Company Information"}
                    </h5>
                </div>

                <Formprofile Data={Data}/>
            </div>
        </div>
    </div>
  )
}

export default ModelEditprofile;