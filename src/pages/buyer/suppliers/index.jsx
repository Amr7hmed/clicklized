import React from 'react'
import Suppliersitems from '../../../components/buyer/suppliers/index.jsx';
import Navbar from '../../../layout/navbar/index.jsx';

function Suppliers() {
  return (
    <section className='mysuppliers'>
        <Navbar/>
        <Suppliersitems/>
    </section>
  )
}

export default Suppliers;