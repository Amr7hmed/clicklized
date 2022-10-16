import React from 'react';
import Loction from './loction';

function ModalMap(props) {
    const {clickedLatLng, setClickedLatLng}=props;

    const removeData=()=>{
        setClickedLatLng(null);
      }
    
  return (
  <div className="modal fade" id="modalmap" tabIndex="-1" aria-labelledby="modalmapLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="modalmapLabel">Add Location on map</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
         onClick={removeData}></button>
      </div>
      <div className="modal-body">
      <Loction clickedLatLng={clickedLatLng} setClickedLatLng={setClickedLatLng}/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-save" data-bs-dismiss="modal">Save changes</button>
        <button type="button" className="btn btn-close_modal" data-bs-dismiss="modal" onClick={removeData}>Close</button>
      </div>
    </div>
  </div>
</div>

  )
}

export default ModalMap;