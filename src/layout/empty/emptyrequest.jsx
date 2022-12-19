import React from 'react'
import { useContext } from 'react';
import { Authcontext } from '../../store/context';

function EmptyRequest() {
  
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  return (
    <section className='empty-contener'>
      <div className="crsail">
        
      </div>
      <h5>
          {language === "Ar" ? "لم تقم بإضافة أي طلب" : "You don’t have any request"}
      </h5>
    </section>
  )
}

export default EmptyRequest;