import React from 'react';
import { NavLink } from 'react-router-dom';
import IconLeft from '../../../../images/icon/arrow-left.svg';

function ShowTop(props) {
    const { name } = props;
    return (
        <div className='requestdetailsdata__top'>
            <div className="left">
                <NavLink to={"/myrequestseller"}>
                    <img src={IconLeft} alt="Icon Left" className='iconleft' />
                </NavLink>
                <h4>Request name #{name}</h4>
            </div>

        </div>
    )
}

export default ShowTop