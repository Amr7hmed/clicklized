import React, { useState } from 'react';
import NavList from './list';
import RequestDatatBottom from './requestdetails/index.jsx';
import ShowQuestionsData from './questions/index.jsx';
import OffersDetiles from './offers';
import { useLocation } from 'react-router-dom';

function Showrequestrow(props) {
    const { id, name ,Data  } = props;
    const [paramsname, setParamsname] = useState("");
    const [stylebuttons, setStylebuttons] = useState("requestdetails");

    let location = useLocation(),
        textlocation = location.pathname,
        resultdetails = textlocation.includes("requestdetails"),
        resultquestions = textlocation.includes("questions"),
        resultoffers = textlocation.includes("offers");

    return (
        <div className="showrequestdata__row">
            <NavList id={id} name={name} stylebuttons={stylebuttons} setParamsname={setParamsname} 
            setStylebuttons={setStylebuttons} />
            
            {resultquestions === true ?
            <ShowQuestionsData />
            : resultoffers === true ?
            <OffersDetiles Data={Data}/>
            :
            <RequestDatatBottom Data={Data}/>
            }



        </div>
    )
}

export default Showrequestrow;