import React from 'react';
import { useContext } from 'react';
import { Authcontext } from '../../../../../store/context';
import Loction from './loction';

function ModalMap(props) {
    const {clickedLatLng, setClickedLatLng ,setAddress}=props;

    const authcontext = useContext(Authcontext);
    const language = authcontext.language;

    const removeData=()=>{
        setClickedLatLng(null);
      }
    
  return (
  <div className="modal fade" id="modalmap" tabIndex="-1" aria-labelledby="modalmapLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="modalmapLabel">
        {language === "Ar" ? "اختر الموقع على الخريطة" : "Choose location on map"}
          </h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
         onClick={removeData}></button>
      </div>
      <div className="modal-body">
      <Loction clickedLatLng={clickedLatLng} setClickedLatLng={setClickedLatLng} setAddress={setAddress}/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-save" data-bs-dismiss="modal">
        {language === "Ar" ? "حفظ" : "Save"}
        </button>
        <button type="button" className="btn btn-close_modal" data-bs-dismiss="modal" onClick={removeData}>
        {language === "Ar" ? "ألغاء" : "Cancel"}
        </button>
      </div>
    </div>
  </div>
</div>

  )
}

export default ModalMap;