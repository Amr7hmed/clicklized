import React from 'react';
import { NavLink } from 'react-router-dom';
import Logoimg from "../../images/logo/logo.png";
import IconNotification from './iconnotification';
import IconProfile from './iconprofile';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <NavLink to={"/"} className="navbar-brand" href="#">
                        <img src={Logoimg} alt="Logo img" />
                </NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink to={"/"}  className='btn-request'>My request</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to={"/"} className='suppliers'>My suppliers</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <IconNotification/>
                        <IconProfile/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar