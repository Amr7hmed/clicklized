import React, { useState ,useEffect } from 'react';
import Suppliersitems from '../../../components/buyer/suppliers/index.jsx';
import Navbar from '../../../components/buyer/navbar/index.jsx';

import Loading from '../../../layout/loading/loading.jsx';
import { GetDataSuppliers } from '../../../api/buyer/actions.js';

function Suppliers() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    GetDataSuppliers(setLoading,setData);
  }, [loading]);

  return (
    <>
    {loading === false ? (
      <Loading/>
    ) : (
    <section className='mysuppliers'>
        <Navbar/>
        <Suppliersitems Data={data} setLoading={setLoading}/>
    </section>
  )}
  </>
  )
}

export default Suppliers;