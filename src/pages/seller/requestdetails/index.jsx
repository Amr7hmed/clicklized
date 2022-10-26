import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../../../components/seller/navbar/index.jsx';
import Showrequestrow from '../../../components/seller/requestdetails/details/index.jsx';
import ShowTop from '../../../components/seller/requestdetails/top/index.jsx';

function RequestDetails() {
    const { id, name } = useParams();
    const Stylebuttons = "requestdetails";
    return (
        <section className='requestdetails'>
        <Navbar Styleclass={"btnmyrequestseller"}/>
            <div className="container">
                <div className='requestdetailsdata'>
                    <ShowTop name={name} />
                    <Showrequestrow  id={id} name={name} Stylebuttons={Stylebuttons}/>
                </div>
            </div>
        </section>
    )
}

export default RequestDetails;