import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GetDataRequest } from '../../../api/seller/actions.js';
import Navbar from '../../../components/seller/navbar/index.jsx';
import Showrequestrow from '../../../components/seller/requestdetails/index.jsx';
import ShowTop from '../../../components/seller/requestdetails/top/index.jsx';

function RequestDetails() {
    const { id } = useParams();
    const Stylebuttons = "requestdetails";

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      GetDataRequest(id,setLoading, setData);
    }, [loading]);
  
    return (
        <section className='requestdetails'>
        <Navbar Styleclass={"btnmyrequestseller"}/>
            <div className="container">
                <div className='requestdetailsdata'>
                    <ShowTop name={"5255"} />
                    <Showrequestrow  id={id} name={"5255"} Stylebuttons={Stylebuttons}/>
                </div>
            </div>
        </section>
    )
}

export default RequestDetails;