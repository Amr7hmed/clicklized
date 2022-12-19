import React, { useContext } from 'react'
import { Authcontext } from '../../../../store/context.js';
import FormEditSuppliers from './form/edit.jsx';

function ModelEditSuppliers(props) {
  const {Id}=props;

  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  return (
    <div className="modal fade modeleditsuppliers"
    id={"modeleditsuppliers-"+ Id} tabIndex="-1" 
    aria-labelledby="modeleditsuppliersLabel" aria-hidden="true">
        <div 
        className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modeleditsuppliersLabel">
                    {language === "Ar" ?"تعديل بيانات المورد":" Edit supplier"}
                    </h5>
                </div>

                <FormEditSuppliers/>
            </div>
        </div>
    </div>
  )
}

export default ModelEditSuppliers;