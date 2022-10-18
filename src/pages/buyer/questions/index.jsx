import React from 'react'
import { useParams } from 'react-router-dom';
import Showrequestrow from '../../../components/buyer/showrequest/questions/index.jsx';
import ShowTop from '../../../components/buyer/showrequest/top/index.jsx';
import Navbar from '../../../layout/navbar';

function Questions() {
    const { id, name } = useParams();
    const Stylebuttons = "questions";
    return (
        <section className='showrequest'>
        <Navbar Stylebuttons={Stylebuttons}/>
            <div className="container">
                <div className='showrequestdata'>
                    <ShowTop id={id} name={name} />
                    <Showrequestrow  id={id} name={name} Stylebuttons={Stylebuttons}/>
                </div>
            </div>
        </section>
    )
}

export default Questions;