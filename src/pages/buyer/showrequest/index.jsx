import React, { useState ,useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import Showrequestrow from '../../../layout/showrequest/index.jsx';
import ShowTop from '../../../layout/showrequest/top/index.jsx';
import Navbar from '../../../components/buyer/navbar/index.jsx';

import { GetDataRequest } from '../../../api/actions.js';
import Loading from '../../../layout/loading/loading.jsx';

function ShowRequestbuyer() {
    const { id } = useParams(),
          location = useLocation();
    let textlocation = location.pathname;
    let result = textlocation.includes("requestdetailsseller");

    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [data, setData] = useState([]);
  
    useEffect(() => {
        GetDataRequest(setLoading,setData,id);
        setName(data.order_num);
    }, [loading]);


    return (
        <>
        {loading === false ? (
          <Loading/>
        ) : (
        <section className='showrequest'>
            <Navbar />
            <div className="container">
                <div className='showrequestdata'>
                    <ShowTop name={name} result={result}/>
                    <Showrequestrow  id={id} name={name} setName={setName} Data={data} result={result}/>
                </div>
            </div>
        </section>
    )}
    </>
    )
}

export default ShowRequestbuyer;