import React from 'react'
import { useParams } from 'react-router-dom';
import Showrequestrow from '../../../components/buyer/showrequest/requestdetails/index.jsx';
import ShowTop from '../../../components/buyer/showrequest/top/index.jsx';
import Navbar from '../../../components/buyer/navbar/index.jsx';

function ShowRequest() {
    const { id, name } = useParams();
    const Stylebuttons = "requestdetails";
    return (
        <section className='showrequest'>
            <Navbar />
            <div className="container">
                <div className='showrequestdata'>
                    <ShowTop id={id} name={name} />
                    <Showrequestrow  id={id} name={name} Stylebuttons={Stylebuttons}/>
                </div>
            </div>
        </section>
    )
}

export default ShowRequest;