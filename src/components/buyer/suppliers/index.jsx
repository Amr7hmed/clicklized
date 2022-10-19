import React, { useState } from 'react'
import SuppliersFilter from './filter/index.jsx'
import SuppliersHeadr from './headr/suppliersheadr.jsx';
import ModelAddSuppliers from './modal/form/modeladdsuppliers.jsx';
import SuppliersRow from './row/index.jsx'

function Suppliersitems() {
  const [toggle,setToggole]=useState(false);
  return (
    <div className='suppliersitems'>
      <div className="container">
            <SuppliersHeadr Title={"Favorite Suppliers list"}
            Toggle={toggle} setToggole={setToggole}/>
            <SuppliersFilter Toggle={toggle}/>
            <SuppliersRow/>
            <ModelAddSuppliers/>
      </div>
    </div>
  )
}

export default Suppliersitems