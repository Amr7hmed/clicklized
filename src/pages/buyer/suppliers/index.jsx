import React from 'react'
import Suppliersitems from '../../../components/buyer/suppliers/index.jsx';
import Navbar from '../../../components/buyer/navbar/index.jsx';

function Suppliers() {
  return (
    <section className='mysuppliers'>
        <Navbar/>
        <Suppliersitems/>
    </section>
  )
}

export default Suppliers;