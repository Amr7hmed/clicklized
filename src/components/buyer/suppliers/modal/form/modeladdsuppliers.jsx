import React from 'react';
import { useContext } from 'react';
import { Authcontext } from '../../../../../store/context.js';
import FormAddSuppliers from './add.jsx';

function ModelAddSuppliers(props) {
  const {Id}=props;

  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  return (
    <div className="modal fade modeleditsuppliers"
    id={"modeladdsuppliers"} tabIndex="-1" 
    aria-labelledby="modeleditsuppliersLabel" aria-hidden="true">
        <div 
        className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modeleditsuppliersLabel">
                      {language === "Ar" ?"إضافة مورد جديد":"Add new supplier"}
                    </h5>
                </div>
                <FormAddSuppliers/>
            </div>
        </div>
    </div>
  )
}

export default ModelAddSuppliers;