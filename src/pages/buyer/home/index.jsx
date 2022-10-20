import React from 'react';
import Chart from '../../../components/buyer/home/chart/index.jsx';
import Navbar from '../../../components/buyer/navbar/index.jsx';

function HomeBuyer() {
  return (
    <section className='home'>
      <Navbar/>
      <Chart/>
    </section>
  )
}

export default HomeBuyer;