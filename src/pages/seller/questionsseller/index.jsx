import React from 'react'
import { useParams } from 'react-router-dom';
import Showrequestrow from '../../../components/seller/requestdetails/questions/index.jsx';
import Navbar from '../../../components/seller/navbar/index.jsx';
import ShowTop from '../../../components/seller/requestdetails/top/index.jsx';

function QuestionsSeller() {
    const { id, name } = useParams();
    const Stylebuttons = "questions";
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

export default QuestionsSeller;


