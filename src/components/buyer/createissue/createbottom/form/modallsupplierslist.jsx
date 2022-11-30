import React, { useState, useEffect } from 'react';
import { GetDataSuppliers } from '../../../../../api/buyer/actionsuppliers';
import ItemSupplier from './itemsupplier.jsx';

function ModalSuppliersList(props) {
  const {AddSuppliers ,DoneAdded,RemoveallSuppliers} = props;
  const [loading, setLoading] = useState(false);
  const [supplierslist, setSupplierslist] = useState([]);

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
          <h5 className="modal-title" id="modallsupplierslistLabel">Choose suppliers</h5>
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
            onClick={DoneAdded}>Done</button>
            <button type="button" className="btn btn-close_modal" data-bs-dismiss="modal"
            onClick={RemoveallSuppliers}>Cancel</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ModalSuppliersList;