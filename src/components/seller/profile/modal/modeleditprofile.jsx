import React from 'react'
import Formprofileseller from '../form/profile.jsx';

function ModelEditprofile() {
  return (
    <div className="modal fade"
    id="modeleditprofileseller" tabIndex="-1" 
    aria-labelledby="modeleditprofilesellerLabel" aria-hidden="true">
        <div 
        className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modeleditprofilesellerLabel">
                    Edit Company Information
                    </h5>
                </div>

                <Formprofileseller/>
            </div>
        </div>
    </div>
  )
}

export default ModelEditprofile;