import React from 'react'

function ButtonList(props) {
    const {Stylebuttons ,id , name ,setParamsname,setStylebuttons}=props;
    
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
                Request details
            </button>
        </li>
        <li>
            <button 
            onClick={()=>Gotonextscreen("questionsbuyer","questions")}
            className={Stylebuttons === "questions"
            ?"btn btn_navlist activeitem":"btn btn_navlist"}>
                Questions
            </button>
        </li>
        <li>
            <button
            onClick={()=>Gotonextscreen("offersbuyer","offers")}
            className={Stylebuttons === "offers"
            ?"btn btn_navlist activeitem":"btn btn_navlist"}>
                Offers
            </button>
        </li>
    </ul>
    )
}

export default ButtonList