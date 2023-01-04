import React from 'react'
import { useContext } from 'react';
import { Authcontext } from '../../store/context';


function EmptyShowRequest(props) {
  const {Data}=props;
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
  return (
    <section className='empty-showrequest'>
      <div className="crsail"></div>
      <h5>{Data}</h5>
    </section>
  )
}

export default EmptyShowRequest;