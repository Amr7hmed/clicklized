import React, { useContext } from 'react'
import { Authcontext } from '../../../../store/context';
import Formpassword from '../form/password';

function ModalPassword() {
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
    return (
        <div className="modal fade"
        id="modalchangepasswordbuyer" tabIndex="-1" 
        aria-labelledby="modalchangepasswordbuyerLabel" aria-hidden="true">
            <div 
            className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalchangepasswordbuyerLabel">
                        {language === "Ar" ?"تغير كلمة السر":"Change password"}
                        </h5>
                    </div>
                    <Formpassword/>
                </div>
            </div>
        </div>
    )
}

export default ModalPassword;