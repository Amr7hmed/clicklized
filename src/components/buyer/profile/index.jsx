import React, { useState ,useEffect } from 'react'
import { GetDataProfile } from '../../../api/actionsprofile';
import GeneralBottom from './general/generalbottom';
import GeneralTop from './general/generaltop'
import ModalPassword from './modal/modalpassword';
import ModelEditprofile from './modal/modeleditprofile';

function MyProfile() {
  const [username,setUsername]=useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const userId=localStorage.getItem("userid");

  useEffect(() => {
    GetDataProfile(userId,setLoading,setData);
    setUsername(data.name)
  }, [loading]);
  
  return (<>
    {loading === false ? (
      ""
    ) : (
    <section className='myprofile'>
        <div className="container">
        <GeneralTop Username={username}/>
        <GeneralBottom Data={data}/>
        <ModalPassword/>
        <ModelEditprofile Data={data}/>
        </div>
    </section>
    )}
  </>)
}

export default MyProfile