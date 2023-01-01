import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Logoimg from "../../../images/logo/logo.png";
import { Authcontext } from '../../../store/context';
import IconLanguage from './iconlanguage';
import IconNotification from './iconnotification';
import IconProfile from './iconprofile';

function Navbar(props) {
    const {Styleclass}=props;
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
    return (
        <nav className="navbar navbarbuyer navbar-expand-lg">
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
                        <NavLink to={"/myrequest"}  className={'btn-request ' + Styleclass}>
                            {language === "Ar" ? 'طلباتي' : "My request"}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to={"/suppliers"} className='suppliers'>
                            {language === "Ar" ? 'موردي' : "My suppliers"}
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