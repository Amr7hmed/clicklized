import React, { useState ,useEffect } from 'react';
import MyProfile from '../../../components/buyer/profile/index.jsx';
import Navbar from '../../../components/buyer/navbar/index.jsx';
import Loading from '../../../layout/loading/loading.jsx';
import { GetDataProfile } from '../../../api/profile.js';

function ProfileBuyer() {
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
    <MyProfile Data={data} Username={username} setLoadingdata={setLoading}/>
    </section>
  )}
  </>
)}

export default ProfileBuyer;