import React from 'react';
import { NavLink } from 'react-router-dom';
import IconLeft from '../../../../images/icon/arrow-left.svg';

function ShowTop(props) {
    const { id, name } = props;
    const SendData=(value)=>{
    }
    return (
        <div className='showrequestdata__top'>
            <div className="left">
                <NavLink to={"/myrequest"}>
                    <img src={IconLeft} alt="Icon Left" className='iconleft' />
                </NavLink>
                <h4>Request name #{name}</h4>
            </div>

            <div className="right">
                <span className='text'>Change status</span>


                <div className="dropdown">
                    <button className="btn dropdown-toggle" 
                    type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Open
                    </button>
                    <ul className="dropdown-menu dropdown-menu-lg-start" aria-labelledby="dropdownMenuButton1">
                        <li onClick={()=>SendData("open")}>Open</li>
                        <li onClick={()=>SendData("close")}>Close</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ShowTop