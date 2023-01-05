import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { GetDataRequest } from '../../../api/actions.js';
import Navbar from '../../../components/seller/navbar/index.jsx';

import Loading from '../../../layout/loading/loading.jsx';
import Showrequestrow from '../../../layout/showrequest/index.jsx';
import ShowTop from '../../../layout/showrequest/top/index.jsx';

function RequestDetails() {

    let { id } = useParams(),
        location = useLocation(),
        textlocation = location.pathname,
        resultseller = textlocation.includes("seller");

    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
      GetDataRequest(setLoading, setData ,id);
      setName(data.order_num);
    }, [loading]);
  
    return (
        <>
        {loading === false ? (
          <Loading/>
        ) : (
        <section className='showrequest'>
        <Navbar Styleclass={"btnmyrequestseller"}/>
            <div className="container">
                <div className='showrequestdata'>
                    <ShowTop name={name}/>
                    <Showrequestrow  id={id} name={name} setName={setName} Data={data}/>
                </div>
            </div>
        </section>
    )}
    </>
    )
}

export default RequestDetails;