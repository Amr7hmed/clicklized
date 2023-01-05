import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { GetDataSuppliers } from '../../../../../api/actions.js';

import { Authcontext } from '../../../../../store/context';
import ItemSupplier from './itemsupplier.jsx';

function ModalSuppliersList(props) {
  const {AddSuppliers ,DoneAdded,RemoveallSuppliers} = props;
  const [loading, setLoading] = useState(false);
  const [supplierslist, setSupplierslist] = useState([]);

  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  useEffect(() => {
    GetDataSuppliers(setLoading, setSupplierslist);
  }, [loading]);


  return (
    <div className="modal fade" id="modallsupplierslist" tabIndex="-1"
      aria-labelledby="modallsupplierslistLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
            ></button>
          </div>
          <h5 className="modal-title" id="modallsupplierslistLabel">
            {language === "Ar" ? "اختر الموردين" : "Choose suppliers"}
            </h5>
          <div className="modal-body">

            <>
              {loading === false ? (
                ""
              ) : (
                <div className="listitems">
                  {supplierslist.map(item =>
                    <ItemSupplier key={item.id} item={item} AddSuppliers={AddSuppliers}/>
                  )}
                </div>
              )}
            </>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-save" data-bs-dismiss="modal"
            onClick={DoneAdded}>
            {language === "Ar" ? "أرسال" : "Done"}
            </button>
            <button type="button" className="btn btn-close_modal" data-bs-dismiss="modal"
            onClick={RemoveallSuppliers}>
            {language === "Ar" ? "ألغاء" : "Cancel"}
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ModalSuppliersList;