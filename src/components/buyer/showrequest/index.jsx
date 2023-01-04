import React, { useState } from 'react';
import NavList from './list';
import RequestDatatBottom from './requestdetails/index.jsx';
import ShowQuestionsData from './questions/index.jsx';
import OffersDetiles from './offers';

function Showrequestrow(props) {
    const { id, name ,Data } = props;
    const [paramsname, setParamsname] = useState("");
    const [stylebuttons, setStylebuttons] = useState("requestdetails");

    return (
        <div className="showrequestdata__row">
            <NavList id={id} name={name} stylebuttons={stylebuttons} setParamsname={setParamsname} 
            setStylebuttons={setStylebuttons} />
            {paramsname === "questionsbuyer" ?
            <ShowQuestionsData />
            : paramsname === "offersbuyer" ?
            <OffersDetiles Data={Data}/>
            :
            <RequestDatatBottom Data={Data}/>
            }
        </div>
    )
}

export default Showrequestrow;