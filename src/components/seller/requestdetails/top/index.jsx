import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import IconLeft from '../../../../images/icon/arrow-left.svg';
import { Authcontext } from '../../../../store/context';

function ShowTop(props) {
    const { name } = props;
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
    return (
        <div className='requestdetailsdata__top'>
            <div className="left">
                <NavLink to={"/myrequestseller"}>
                    <img src={IconLeft} alt="Icon Left" className='iconleft' />
                </NavLink>
                <h4>
                    {language === "Ar" ?
                        <>
                            عنوان الطلب #{name}
                        </> : <>
                            Request name #{name}
                        </>}
                </h4>
            </div>

        </div>
    )
}

export default ShowTop