import React from 'react';
import Chart from '../../components/home/chart';
import Navbar from '../../components/navbar';

function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <Chart/>
    </div>
  )
}

export default Home;