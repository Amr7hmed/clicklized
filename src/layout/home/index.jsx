import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { GetuserTypes } from '../../api/actionsauth';
import HomeBuyer from '../../pages/buyer/home';
import HomeSeller from '../../pages/seller/home';
import SignIn from '../../pages/signin';
import Loading from '../loading/loading';

function Home() {
  const [userTypes, setUserTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      GetuserTypes(setUserTypes,setLoading);
  }, [loading]);

  const Buyerdata = userTypes.filter(obj => {
    return obj.name === "buyer";
  });

  const Supplierdata = userTypes.filter(obj => {
    return obj.name === "supplier";
  });
  return (
    <>
    {loading === false ? (
      <Loading/>
    ) : (
      <section className='home'>
                {localStorage.getItem("usertypeclicklized") == Buyerdata[0].id ?
                <HomeBuyer/>
                :localStorage.getItem("usertypeclicklized") == Supplierdata[0].id ?
                <HomeSeller/>
                :<SignIn/>}
      </section>
    )}
    </>
  )
}

export default Home;

/*
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

*/