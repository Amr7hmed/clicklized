import React from 'react'
import { useParams } from 'react-router-dom';
import Offersrow from '../../../components/buyer/showrequest/offers/index.jsx';
import ShowTop from '../../../components/buyer/showrequest/top/index.jsx';
import Navbar from '../../../components/buyer/navbar/index.jsx';

function Offers() {
    const { id, name } = useParams();
    const Stylebuttons = "offers";
    return (
        <section className='showrequest'>
        <Navbar Stylebuttons={Stylebuttons}/>
            <div className="container">
                <div className='showrequestdata'>
                    <ShowTop id={id} name={name} />
                    <Offersrow  id={id} name={name} Stylebuttons={Stylebuttons}/>
                </div>
            </div>
        </section>
    )
}

export default Offers;