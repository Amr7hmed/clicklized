import React from 'react'
import { useContext } from 'react';
import { Authcontext } from '../../../../store/context';

function ButtonList(props) {
    const {Stylebuttons ,id , name ,setParamsname,setStylebuttons}=props;
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
    
  const Gotonextscreen = (valuesParamsname ,valuesStyle) => {
   setParamsname(valuesParamsname);
   setStylebuttons(valuesStyle)
 }
    return (
    <ul>
        <li>
            <button 
            onClick={()=>Gotonextscreen("showrequestbuyer","requestdetails")}
            className={Stylebuttons === "requestdetails"
            ?"btn btn_navlist activeitem":"btn btn_navlist"}>
            {language === "Ar" ? "تفاصيل الطلب" : "Request details"}
            </button>
        </li>
        <li>
            <button 
            onClick={()=>Gotonextscreen("questionsbuyer","questions")}
            className={Stylebuttons === "questions"
            ?"btn btn_navlist activeitem":"btn btn_navlist"}>
            {language === "Ar" ? "الأسئلة" : "Questions"}
                
            </button>
        </li>
        <li>
            <button
            onClick={()=>Gotonextscreen("offersbuyer","offers")}
            className={Stylebuttons === "offers"
            ?"btn btn_navlist activeitem":"btn btn_navlist"}>
            {language === "Ar" ? "العروض" : "Offers"}
                
            </button>
        </li>
    </ul>
    )
}

export default ButtonList