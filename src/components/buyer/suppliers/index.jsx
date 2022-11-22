import React, {  useState } from 'react'
import EmptySuppliers from '../../../layout/empty/emptysuppliers.jsx';
import SuppliersFilter from './filter/index.jsx'
import SuppliersHeadr from './headr/suppliersheadr.jsx';
import ModelAddSuppliers from './modal/form/modeladdsuppliers.jsx';
import SuppliersRow from './row/index.jsx'

function Suppliersitems(props) {
  const {Data ,setLoading}=props;
  const [toggle,setToggole]=useState(false); 

  return (
    <div className='suppliersitems'>
      <div className="container">
            <SuppliersHeadr Title={"Favorite Suppliers list"}
            Toggle={toggle} setToggole={setToggole}/>
            <SuppliersFilter Toggle={toggle}/>
            <SuppliersRow Data={Data} setLoading={setLoading}/>
            <ModelAddSuppliers/>
      </div>
    </div>
  )
}

export default Suppliersitems