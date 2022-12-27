import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { Authcontext } from '../../../../store/context';

function ButtonList(props) {
    const { Stylebuttons, id, paramsdata, setParamsdata } = props;
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;

    return (
        <ul>
            <li>
                <button
                    to={`/requestdetailsseller/${id}`}
                    className={paramsdata === ""
                        ? "btn btn_navlist activeitem" : "btn btn_navlist"}
                    onClick={() => {
                        setParamsdata("");
                    }}>
                    {language === "Ar" ? "تفاصيل الطلب" : "Request details"}
                </button>
            </li>
            <li>
                <button
                    className={paramsdata === "questions"
                        ? "btn btn_navlist activeitem" : "btn btn_navlist"}
                    onClick={() => {
                        setParamsdata("questions");
                    }}>
                    {language === "Ar" ? "الأسئلة" : "Questions"}
                </button>
            </li>
        </ul>
    )
}

export default ButtonList