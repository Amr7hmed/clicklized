import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetDataRequest } from '../../../api/actions';
import Navbar from '../../../components/seller/navbar';
import Showrequestrow from '../../../components/seller/offerrequest/details';
import ShowTop from '../../../components/seller/offerrequest/top';
import Loading from '../../../layout/loading/loading';

function OfferRequest() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
  
    
    useEffect(() => {
      GetDataRequest(setLoading, setData ,id);
      setName(data.order_num);
    }, [loading]);
    
  return (
    <>
    {loading === false ? (
      <Loading />
    ) : (
        <section className='offerdetails'>
        <Navbar/>
            <div className="container">
                <div className='showrequestdata'>
                    <ShowTop name={name} />
                    <Showrequestrow  Data={data.items}/>
                </div>
            </div>
        </section>
    )}
  </>
  )
}

export default OfferRequest;