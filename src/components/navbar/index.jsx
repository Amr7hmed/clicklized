import React from 'react';
import Logoimg from "../../images/logo/logo.png";
import IconNotification from '../home/iconnotification';

function Navbar() {
    return (
        <section className='navbar'>
            <div className="container">
                <div className="navbar__item">
                    <div className="right">
                        <div className="logo">
                            <img src={Logoimg} alt="Logo img" />
                        </div>
                        <button className='btn'>My request</button>

                        <span className='suppliers'>My suppliers</span>
                    </div>

                    <div className="left">
                        <ul>
                            <IconNotification/>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar