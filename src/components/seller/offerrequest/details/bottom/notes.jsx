import { Field } from 'formik';
import React from 'react'

function NotesOffer() {
  return (  
  <div className="inputform_item">
  <div className="row">
      <div className="col-12">
  <label className="form-label">Notes</label>
  <textarea 
    className={"form-control"}
    placeholder="Enter notes if you have"></textarea>
</div>
</div>
</div>
  )
}

export default NotesOffer;