import React from 'react'
import MyProfile from '../../../components/buyer/profile/index.jsx';
import Navbar from '../../../components/buyer/navbar/index.jsx';

function ProfileBuyer() {
  return (
    <section className='profile'>
    <Navbar/>
    <MyProfile/>
    </section>
  )
}

export default ProfileBuyer;