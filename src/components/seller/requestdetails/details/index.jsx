import React from 'react'
import NavList from '../list';
import RequestDatatBottom from './bottom/index.jsx';
import ImageFile from "../../../../images/icon/icon-pdf.png";

function Showrequestrow(props) {
    const { id, name, Stylebuttons } = props;
    const request = {
        type: "Request type",
        day: "25/10/2022",
        about: `Here  are some info  about request, 
        Here  are some info  about request, 
        Here  are some info  about request, 
        Here  are some info  about request,.`,
        files:[
            {
                image:ImageFile,
                name:"file.pdf",
            }
        ],
        address:"Address details here,Address details here,Address details here.",
        conditions:["Here are some conditions.","Here are some conditions.","Here are some conditions."]
    };

    return (
        <div className="requestdetailsdata__row">
            <NavList id={id} name={name} Stylebuttons={Stylebuttons} />
            <RequestDatatBottom request={request} id={id}/>
        </div>
    )
}

export default Showrequestrow;