import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../../components/seller/navbar';
import Showrequestrow from '../../../components/seller/offerrequest/details';
import ShowTop from '../../../components/seller/offerrequest/top';
import Loading from '../../../layout/loading/loading';

function OfferRequest() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    /*
    useEffect(() => {
      GetDataRequestSupplier(setLoading, setData);
    }, [loading]);
    */
  return (
    <>
    {loading === false ? (
      <Loading />
    ) : (
        <section className='offerdetails'>
        <Navbar/>
            <div className="container">
                <div className='requestdetailsdata'>
                    <ShowTop name={id} />
                    <Showrequestrow  />
                     
                </div>
            </div>
        </section>
    )}
  </>
  )
}

export default OfferRequest;