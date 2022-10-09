import React from 'react'
import Requestitems from '../../components/myrequest';
import Navbar from '../../components/navbar';

function Myrequest() {
  return (
    <section className='myrequest'>
        <Navbar Styleclass={"btnmyrequest"}/>
        <Requestitems/>
    </section>
  )
}

export default Myrequest;