import React from 'react'
import { useParams } from 'react-router-dom';
import ShowRequestData from '../../../components/buyer/showrequest';
import Navbar from '../../../layout/navbar';

function ShowRequest() {
    const { id, name } = useParams();
    return (
        <section className='showrequest'>
            <Navbar />
            <div className="container">
                <ShowRequestData id={id} name={name}/>
            </div>
        </section>
    )
}

export default ShowRequest;