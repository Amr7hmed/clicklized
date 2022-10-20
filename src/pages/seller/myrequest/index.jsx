import React from 'react'
import RequestitemsSeller from '../../../components/seller/myrequest/index.jsx';
import Navbar from '../../../components/seller/navbar/index.jsx';

function MyRequestSeller() {
  return (
    <section className='myrequestseller'>
        <Navbar Styleclass={"btnmyrequestseller"}/>
        <RequestitemsSeller/>
    </section>
  )
}

export default MyRequestSeller;