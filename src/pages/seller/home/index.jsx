import React from 'react';
import Navbar from '../../../components/seller/navbar/index.jsx';
import HomeRequests from '../../../components/seller/home/index.jsx';

function HomeSeller() {
  return (
    <section className='home'>
      <Navbar/>
      <HomeRequests/>
    </section>
  )
}

export default HomeSeller;