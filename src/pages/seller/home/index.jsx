import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../../../components/seller/navbar/index.jsx";
import HomeRequests from "../../../components/seller/home/index.jsx";
import Loading from "../../../layout/loading/loading.jsx";
// Api
import { GetDataRequestSupplier } from "../../../api/seller/actions.js";

function HomeSeller() {
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
        <>
          <Navbar />
          <HomeRequests Data={data} />
        </>
      )}
    </>
  );
}

export default HomeSeller;
