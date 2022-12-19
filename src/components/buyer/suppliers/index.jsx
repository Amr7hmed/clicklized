import React, { useContext, useState } from 'react'
import EmptySuppliers from '../../../layout/empty/emptysuppliers.jsx';
import { Authcontext } from '../../../store/context.js';
import SuppliersFilter from './filter/index.jsx'
import SuppliersHeadr from './headr/suppliersheadr.jsx';
import ModelAddSuppliers from './modal/form/modeladdsuppliers.jsx';
import SuppliersRow from './row/index.jsx'

function Suppliersitems(props) {
  const { Data, setLoading } = props;
  const [toggle, setToggole] = useState(false);

  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <div className='suppliersitems'>
      <div className="container">
        <SuppliersHeadr Title=
          {language === "Ar" ? "قائمة الموردين" : "Favorite Suppliers list"}
          Toggle={toggle} setToggole={setToggole} Data={Data}/>
          <SuppliersFilter Toggle={toggle} />
        <SuppliersRow Data={Data} setLoading={setLoading} />
        <ModelAddSuppliers />
      </div>
    </div>
  )
}

export default Suppliersitems