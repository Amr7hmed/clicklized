import React, { useState } from 'react';
import NavList from './list';
import RequestDatatBottom from './requestdetails/index.jsx';
import IconProfile from "../../../images/icon/img-profile.jpg";
import ShowQuestionsData from './questions/index.jsx';
import OffersDetiles from './offers';

function Showrequestrow(props) {
    const { id, name } = props;
    const [paramsname, setParamsname] = useState("");
    const [stylebuttons, setStylebuttons] = useState("requestdetails");
    const state = {
        numberrequired: "test",
        items: [
            {
                item: "one",
                quantity: "1"
            },
            {
                item: "two",
                quantity: "2"
            },
        ],
        address: "21 set-test cairo",
        day: "25/10/2022",
        inputinsurance: "yes",
        transportation: "included",
        notes: "test data",
        fileslist: ["file.pdf", "fileone.pdf", "filetwo.pdf"],
        supplierslist: [
            {
                id: 1,
                img: IconProfile,
                name: "Supplier name"
            }, {
                id: 2,
                img: IconProfile,
                name: "Supplier name"
            }
        ],
        checkboxtoggle: true,
    };

    return (
        <div className="showrequestdata__row">
            <NavList id={id} name={name} stylebuttons={stylebuttons} setParamsname={setParamsname} setStylebuttons={setStylebuttons} />
            {paramsname === "questionsbuyer" ?
                <ShowQuestionsData />
                : paramsname === "offersbuyer" ?
                    <OffersDetiles />
                    :
                    <RequestDatatBottom state={state} />
            }
        </div>
    )
}

export default Showrequestrow;