import React, { useState ,useEffect } from 'react';
import MyProfile from '../../../components/buyer/profile/index.jsx';
import Navbar from '../../../components/buyer/navbar/index.jsx';
import Loading from '../../../layout/loading/loading.jsx';
import { GetDataProfile } from '../../../api/buyer/actionsprofile.js';
import { Authcontext } from '../../../store/context.js';
import { useContext } from 'react';

function ProfileBuyer() {
  const [username,setUsername]=useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  useEffect(() => {
    GetDataProfile(setLoading,setData ,language);
    setUsername(data.name)
  }, [loading]);
  
  console.log(data.lang);
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