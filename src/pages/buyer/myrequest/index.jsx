import React, { useState ,useEffect } from 'react';
import { GetDataRequest } from '../../../api/buyer/actionrequest.js';
import Requestitems from '../../../components/buyer/myrequest/index.jsx';
import Navbar from '../../../components/buyer/navbar/index.jsx';
import Loading from '../../../layout/loading/loading.jsx';

function Myrequest() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    GetDataRequest(setLoading,setData);
  }, [loading]);
  return (
    <>
    {loading === false ? (
      <Loading/>
    ) : (
    <section className='myrequest'>
        <Navbar Styleclass={"btnmyrequest"}/>
        <Requestitems Data={data}/>
    </section>
    )}
    </>
  )
}

export default Myrequest;