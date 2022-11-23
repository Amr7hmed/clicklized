import React from "react";
import { useState, useEffect } from "react";
import { GetDataRequestSupplier } from "../../../api/seller/actionrequest.js";
import RequestitemsSeller from '../../../components/seller/myrequest/index.jsx';
import Navbar from '../../../components/seller/navbar/index.jsx';
import Loading from "../../../layout/loading/loading.jsx";

function MyRequestSeller() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    GetDataRequestSupplier(setLoading, setData);
  }, [loading]);


  return (
    <>
    {loading === false ? (
      <Loading />
    ) : (
      <section className='myrequestseller'>
          <Navbar Styleclass={"btnmyrequestseller"}/>
          <RequestitemsSeller Data={data}/>
      </section>
    )}
  </>
  )
}

export default MyRequestSeller;