import React from 'react'
import { useContext } from 'react';
import { Authcontext } from '../../store/context';

function EmptyRequest(props) {
  const {TitleEmpty} =props;
  
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  return (
    <section className='empty-contener'>
      <div className="crsail">
        
      </div>
      <h5>
      {TitleEmpty}
      </h5>
    </section>
  )
}

export default EmptyRequest;