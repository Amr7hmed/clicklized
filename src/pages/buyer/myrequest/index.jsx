import React, { useState ,useEffect } from 'react';

import Requestitems from '../../../components/buyer/myrequest/index.jsx';
import Navbar from '../../../components/buyer/navbar/index.jsx';
import Loading from '../../../layout/loading/loading.jsx';
// Api
import { GetAllDataRequest } from '../../../api/buyer/actions.js';

function Myrequest() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    GetAllDataRequest(setLoading,setData);
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