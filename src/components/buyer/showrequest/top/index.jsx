import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import IconLeft from '../../../../images/icon/arrow-left.svg';
import { Authcontext } from '../../../../store/context';

function ShowTop(props) {
    const { id, name } = props;
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
    const { status, setStatus } = useState("");
    const SendData = (value) => {
    }
    return (
        <div className='showrequestdata__top'>
            <div className="left">
                <NavLink to={"/myrequest"}>
                    <img src={IconLeft} alt="Icon Left" className='iconleft' />
                </NavLink>
                <h4>
                    {language === "Ar" ?
                        <>
                            عنوان الطلب #{name}
                        </> : <>
                            Request name #{name}
                        </>}
                </h4>
            </div>

            <div className="right">
                <span className='text'>
                    {language === "Ar" ? "تغيير الحاله" : "Change status"}
                </span>


                <div className="dropdown">
                    <button className="btn dropdown-toggle"
                        type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">

                        {language === "Ar" ? "مفتوح" : "Open"}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-lg-start" aria-labelledby="dropdownMenuButton1">
                        <li onClick={() => SendData("open")}>
                            {language === "Ar" ? "مفتوح" : "Open"}
                        </li>
                        <li onClick={() => SendData("close")}>
                            {language === "Ar" ? "مغلق" : "Close"}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ShowTop