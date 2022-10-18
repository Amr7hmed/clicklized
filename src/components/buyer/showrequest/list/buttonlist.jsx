import React from 'react'
import { NavLink } from 'react-router-dom';

function ButtonList(props) {
    const {Stylebuttons ,id , name}=props;
    return (
    <ul>
        <li>
            <NavLink 
            to={`/showrequest/${name}/${id}`}
            className={Stylebuttons === "requestdetails"
            ?"btn btn_navlist activeitem":"btn btn_navlist"}>
                Request details
            </NavLink>
        </li>
        <li>
            <NavLink 
            to={`/questions/${name}/${id}`}
            className={Stylebuttons === "questions"
            ?"btn btn_navlist activeitem":"btn btn_navlist"}>
                Questions
            </NavLink>
        </li>
        <li>
            <NavLink
            to={`/offers/${name}/${id}`}
            className={Stylebuttons === "offers"
            ?"btn btn_navlist activeitem":"btn btn_navlist"}>
                Offers
            </NavLink>
        </li>
    </ul>
    )
}

export default ButtonList