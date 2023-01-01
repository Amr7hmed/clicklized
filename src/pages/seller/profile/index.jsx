import React, { useState ,useEffect } from 'react';
import MyProfile from '../../../components/seller/profile/index.jsx';
import Navbar from '../../../components/seller/navbar/index.jsx';
import Loading from '../../../layout/loading/loading.jsx';
// Api
import { GetDataProfile } from '../../../api/profile.js';

function ProfileSeller() {  
  const [username,setUsername]=useState("");
const [loading, setLoading] = useState(false);
const [data, setData] = useState([]);

useEffect(() => {
  GetDataProfile(setLoading,setData);
  setUsername(data.name)
}, [loading]);
  return (
    <>
    {loading === false ? (
      <Loading/>
    ) : (
      <section className='profile'>
      <Navbar/>
      <MyProfile Data={data} Username={username}/>
      </section>
  )}
  </>
  )
}

export default ProfileSeller;