import React from 'react'
import { useContext } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Authcontext } from '../../../store/context';

function ButtonList(props) {
    const {Stylebuttons }=props;
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;

    let navigate = useNavigate(),
        { id } = useParams(),
        location = useLocation(),
        textlocation = location.pathname,
        resultseller = textlocation.includes("seller"),
        resultdetails = textlocation.includes("requestdetails"),
        resultquestions = textlocation.includes("questions"),
        resultoffers = textlocation.includes("offers");
    
  const Gotonextscreen = (value ) => {

    if(resultseller === true){
        navigate(`/${value}seller/${id}`);
    }else{
        navigate(`/${value}buyer/${id}`);
    }

 }
    return (
    <ul>
        <li>
            <button 
            onClick={()=>Gotonextscreen("requestdetails")}
            className={resultdetails === true
            ?"btn btn_navlist activeitem":"btn btn_navlist"}>
            {language === "Ar" ? "تفاصيل الطلب" : "Request details"}
            </button>
        </li>
        <li>
            <button 
            onClick={()=>Gotonextscreen("questions")}
            className={resultquestions === true
            ?"btn btn_navlist activeitem":"btn btn_navlist"}>
            {language === "Ar" ? "الأسئلة" : "Questions"}
                
            </button>
        </li>
        <li>
            <button
            onClick={()=>Gotonextscreen("offers")}
            className={resultoffers === true
            ?"btn btn_navlist activeitem":"btn btn_navlist"}>
            {language === "Ar" ? "العروض" : "Offers"}
                
            </button>
        </li>
    </ul>
    )
}

export default ButtonList