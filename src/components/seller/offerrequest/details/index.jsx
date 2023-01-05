import React from 'react'
import RequestDatatBottom from './bottom/index.jsx';

function Showrequestrow(props) {
    const {Data}=props;
  
    return (
        <div className="requestdetailsdata__row">
            <RequestDatatBottom  Data={Data}/>
        </div>
    )
}

export default Showrequestrow;