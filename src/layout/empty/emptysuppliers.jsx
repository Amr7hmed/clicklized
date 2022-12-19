import React from 'react'
import { useContext } from 'react';
import { Authcontext } from '../../store/context';

function EmptySuppliers() {

  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  
  return (
    <section className='empty-contener'>
      <div className="crsail">
        
      </div>
      <h5>
          {language === "Ar" ? "لم تقم بإضافة أي موردين" : "You have not added any suppliers"}
          </h5>
    </section>
  )
}

export default EmptySuppliers;