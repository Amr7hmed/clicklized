import React , { useState }from 'react';
import { useParams } from 'react-router-dom';
import Showrequestrow from '../../../components/seller/showrequest/index.jsx';
import ShowTop from '../../../components/seller/showrequest/top/index.jsx';
import Navbar from '../../../components/seller/navbar/index.jsx';

function ShowRequestseller() {
    const { id, name } = useParams();
    return (
        <section className='showrequest'>
            <Navbar/>
            <div className="container">
                <div className='showrequestdata'>
                    <ShowTop id={id} name={name} />
                    <Showrequestrow  id={id} name={name}/>
                </div>
            </div>
        </section>
    )
}

export default ShowRequestseller;