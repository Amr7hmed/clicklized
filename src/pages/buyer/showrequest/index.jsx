import React, { useState ,useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Showrequestrow from '../../../components/buyer/showrequest/index.jsx';
import ShowTop from '../../../components/buyer/showrequest/top/index.jsx';
import Navbar from '../../../components/buyer/navbar/index.jsx';

import { GetDataRequest } from '../../../api/buyer/actions.js';
import Loading from '../../../layout/loading/loading.jsx';

function ShowRequestbuyer() {
    const { id } = useParams();
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
                    <ShowTop id={id} name={name} />
                    <Showrequestrow  id={id} name={name} setName={setName} Data={data}/>
                </div>
            </div>
        </section>
    )}
    </>
    )
}

export default ShowRequestbuyer;