import { Field } from 'formik';
import React from 'react'

function NotesOffer() {
  return (  
  <div className='inputform'>
  <label className="form-label">Notes</label>
  <textarea 
    className={"form-control"}
    placeholder="Enter notes if you have"></textarea>
</div>
  )
}

export default NotesOffer;