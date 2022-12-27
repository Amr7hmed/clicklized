import React, { useState } from 'react'
import NavList from './list';
import RequestDatatBottom from './details/index.jsx';
import ImageFile from "../../../images/icon/icon-pdf.png";
import ShowQuestionsData from './questions';

function Showrequestrow(props) {
    const { id, name, Stylebuttons } = props;
    const [paramsdata, setParamsdata] = useState("");
    const request = {
        type: "Request type",
        day: "25/10/2022",
        about: `Here  are some info  about request, 
        Here  are some info  about request, 
        Here  are some info  about request, 
        Here  are some info  about request,.`,
        files: [
            {
                image: ImageFile,
                name: "file.pdf",
            }
        ],
        address: "Address details here,Address details here,Address details here.",
        conditions: ["Here are some conditions.", "Here are some conditions.", "Here are some conditions."]
    };

    console.log(paramsdata);

    return (
        <div className="requestdetailsdata__row">
            <NavList id={id} name={name} Stylebuttons={Stylebuttons} paramsdata={paramsdata} setParamsdata={setParamsdata} />
            <>
                {paramsdata === "questions" ?
                    <ShowQuestionsData /> :
                    <RequestDatatBottom request={request} id={id} />
                }
            </>
        </div>
    )
}

export default Showrequestrow;