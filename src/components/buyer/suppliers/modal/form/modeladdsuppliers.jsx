import React from 'react';
import FormAddSuppliers from './add.jsx';

function ModelAddSuppliers(props) {
  const {Id}=props;
  return (
    <div className="modal fade modeleditsuppliers"
    id={"modeladdsuppliers"} tabIndex="-1" 
    aria-labelledby="modeleditsuppliersLabel" aria-hidden="true">
        <div 
        className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modeleditsuppliersLabel">
                    Add new supplier
                    </h5>
                </div>
                <FormAddSuppliers/>
            </div>
        </div>
    </div>
  )
}

export default ModelAddSuppliers;