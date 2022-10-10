import React from 'react';
import Chart from '../../components/home/chart';
import Navbar from '../../layout/navbar/index.jsx';

function Home() {
  return (
    <section className='home'>
      <Navbar/>
      <Chart/>
    </section>
  )
}

export default Home;