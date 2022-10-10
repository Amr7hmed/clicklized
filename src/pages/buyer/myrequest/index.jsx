import React from 'react'
import Requestitems from '../../../components/buyer/myrequest/index.jsx';
import Navbar from '../../../layout/navbar/index.jsx';

function Myrequest() {
  return (
    <section className='myrequest'>
        <Navbar Styleclass={"btnmyrequest"}/>
        <Requestitems/>
    </section>
  )
}

export default Myrequest;