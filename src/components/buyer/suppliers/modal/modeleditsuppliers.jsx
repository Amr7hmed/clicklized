import React from 'react'
import FormEditSuppliers from './form/edit.jsx';

function ModelEditSuppliers(props) {
  const {Id}=props;
  return (
    <div className="modal fade modeleditsuppliers"
    id={"modeleditsuppliers-"+ Id} tabIndex="-1" 
    aria-labelledby="modeleditsuppliersLabel" aria-hidden="true">
        <div 
        className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modeleditsuppliersLabel">
                    Edit supplier
                    </h5>
                </div>

                <FormEditSuppliers/>
            </div>
        </div>
    </div>
  )
}

export default ModelEditSuppliers;