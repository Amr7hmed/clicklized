import React from 'react';
import Logo from '../../images/logo/logo.png';
import Vactor from '../../images/icon/vactor.png';
import FormSignIn from '../../layout/signin/form';
import { useEffect } from 'react';

function SignIn() {
  
  

   
  return (
    <section className='signin'>
        <div className="vactor">
            <img src={Vactor} alt="vactor" />
        </div>
        <div className="signin__data">
            <div className="signin__header">
                <div className="img">
                <img src={Logo} alt="" />
                </div>
                <h5>Welcome to clicklized</h5>
                <span>Sign in now</span>
            </div>
            <FormSignIn/>
        </div>
    </section>
  )
}

export default SignIn;

/*

useEffect(() => {
      console.log(Notification.permission);
      if (!("Notification" in window)) {
        // Check if the browser supports notifications
        alert("This browser does not support desktop notification");
      } else if (Notification.permission === "granted") {
        // Check whether notification permissions have already been granted;
        // if so, create a notification
        const notification = new Notification("Hi there on!");
        // …
      } else if (Notification.permission !== "denied") {
        // We need to ask the user for permission
        Notification.requestPermission().then((permission) => {
          // If the user accepts, let's create a notification
          if (permission === "granted") {
            const notification = new Notification("Hi there no!");
            // …
          }
        });
      }
  }, []);
*/