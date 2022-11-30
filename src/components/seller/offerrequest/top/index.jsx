import React from 'react';

function ShowTop(props) {
    const { name } = props;
    return (
        <div className='requestdetailsdata__top'>
            <div className="left">
                <h4>Request name #{name}</h4>
            </div>

        </div>
    )
}

export default ShowTop;