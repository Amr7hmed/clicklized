import React from 'react';

function ModalSuppliersList() {

    
  return (
  <div className="modal fade" id="modallsupplierslist" tabIndex="-1" aria-labelledby="modallsupplierslistLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="modallsupplierslistLabel">Choose suppliers</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
         onClick={"removeData"}></button>
      </div>
      <div className="modal-body">
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-save" data-bs-dismiss="modal">Save changes</button>
        <button type="button" className="btn btn-close_modal" data-bs-dismiss="modal" onClick={"removeData"}>Close</button>
      </div>
    </div>
  </div>
</div>

  )
}

export default ModalSuppliersList;