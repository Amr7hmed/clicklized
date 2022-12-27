import { Field } from 'formik';
import React from 'react'
import { useContext } from 'react';
import { Authcontext } from '../../../../../store/context';

function NotesOffer() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (  
  <div className="inputform_item">
  <div className="row">
      <div className="col-12">
  <label className="form-label">
    {language === "Ar" ? "الملاحظات" : "Notes"}
  </label>
  <textarea 
    className={"form-control"}
    placeholder={language === "Ar" ? "الملاحظات" : "Enter notes if you have"}></textarea>
</div>
</div>
</div>
  )
}

export default NotesOffer;