import React from 'react'
import { NavLink } from 'react-router-dom';

function ButtonList(props) {
    const {Stylebuttons ,id , name}=props;
    return (
    <ul>
        <li>
            <NavLink 
            to={`/requestdetailsseller/${name}/${id}`}
            className={Stylebuttons === "requestdetails"
            ?"btn btn_navlist activeitem":"btn btn_navlist"}>
                Request details
            </NavLink>
        </li>
        <li>
            <NavLink 
            to={`/questionsseller/${name}/${id}`}
            className={Stylebuttons === "questions"
            ?"btn btn_navlist activeitem":"btn btn_navlist"}>
                Questions
            </NavLink>
        </li>
    </ul>
    )
}

export default ButtonList