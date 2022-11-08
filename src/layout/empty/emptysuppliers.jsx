import React, { useContext } from 'react'
import { Authcontext } from '../../store/context';

function EmptySuppliers() {
  
  return (
    <section className='empty-contener'>
      <div className="crsail">
        
      </div>
      <h5>You have not added any suppliers</h5>
    </section>
  )
}

export default EmptySuppliers;