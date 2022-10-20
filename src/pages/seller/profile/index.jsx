import React from 'react'
import MyProfile from '../../../components/buyer/profile/index.jsx';
import Navbar from '../../../components/buyer/navbar/index.jsx';

function Profile() {
  return (
    <section className='profile'>
    <Navbar/>
    <MyProfile/>
    </section>
  )
}

export default Profile