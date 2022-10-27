import React from 'react'
import MyProfile from '../../../components/seller/profile/index.jsx';
import Navbar from '../../../components/seller/navbar/index.jsx';

function ProfileSeller() {
  return (
    <section className='profile'>
    <Navbar/>
    <MyProfile/>
    </section>
  )
}

export default ProfileSeller;