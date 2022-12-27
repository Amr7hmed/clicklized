import React, { useContext } from 'react';
import { Authcontext } from '../../../../store/context';

function ShowTop(props) {
    const { name } = props;

    const authcontext = useContext(Authcontext);
    const language = authcontext.language;

    return (
        <div className='requestdetailsdata__top'>
            <div className="left">
                <h4>

                    {language === "Ar" ? `${name}# طلب` :
                        `Request name #${name}`}
                </h4>
            </div>

        </div>
    )
}

export default ShowTop;