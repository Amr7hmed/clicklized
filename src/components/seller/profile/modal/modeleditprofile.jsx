import React from 'react'
import Formprofile from '../form/profile';

function ModelEditprofile() {
  return (
    <div className="modal fade"
    id="modeleditprofile" tabIndex="-1" 
    aria-labelledby="modeleditprofileLabel" aria-hidden="true">
        <div 
        className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modeleditprofileLabel">
                    Edit Company Information
                    </h5>
                </div>

                <Formprofile/>
            </div>
        </div>
    </div>
  )
}

export default ModelEditprofile;