import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logoimg from "../../../images/logo/logo.png";
import { Authcontext } from '../../../store/context';
import IconLanguage from './iconlanguage';
import IconNotification from './iconnotification';
import IconProfile from './iconprofile';

function Navbar() {

    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
    let location = useLocation(),
        textlocation = location.pathname,
        myoffersseller = textlocation.includes("myoffersseller"),
        myrequestseller = textlocation.includes("myrequestseller");
    return (
        <nav className="navbar navbarseller navbar-expand-lg">
            <div className="container-fluid">
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
                        <NavLink to={"/myrequestseller"}  
                        className={myrequestseller === true ?`btn-requestseller  btnmyrequestseller`:"btn-requestseller" }>
                            {language === "Ar" ? 'طلباتي' : "My request"}
                            </NavLink>
                        </li>
                        
                        <li className="nav-item">
                        <NavLink to={"/myoffersseller"} 
                        className={myoffersseller === true ?`btn-requestseller  btnmyrequestseller`:"btn-requestseller" }>
                            {language === "Ar" ? 'عروضي' : "My offers"}
                            </NavLink>
                        </li>
                    </ul>
                    <div className="d-flex">
                        {/*
                        <IconLanguage/>
                    */}
                        <IconNotification/>
                        <IconProfile/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar