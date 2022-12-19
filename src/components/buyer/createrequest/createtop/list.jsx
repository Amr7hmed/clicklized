import React from 'react'
import { useContext } from 'react';
import { Authcontext } from '../../../../store/context';

function List(props) {
    const { StyleScreen } = props;

    const authcontext = useContext(Authcontext);
    const language = authcontext.language;

    return (
        <ul className='list'>
            <li>
                <span className={StyleScreen === "createrequest_top" ?
                    'icon editedata'
                    : StyleScreen === "createissue_top" ?
                        'icon active'
                        : StyleScreen === "createreviewdata_top" ?
                            'icon active' : "icon"}>
                    <span>1</span>
                </span>
                <span className={StyleScreen === "createrequest_top" ?
                    'text editedata'
                    : StyleScreen === "createissue_top" ?
                        'text active'
                        : StyleScreen === "createreviewdata_top" ?
                            'text active' : "text"}>

                    {language === "Ar" ? "تفاصيل الطلب" : "Request details"}
                </span>
            </li>
            <span className={StyleScreen === "createrequest_top" ? 'line editedata'
                : StyleScreen === "createissue_top" ? 'line active'
                    : StyleScreen === "createreviewdata_top" ?
                        'line active' :
                        "line"}>

            </span>


            <li>
                <span
                    className={StyleScreen === "createissue_top" ?
                        'icon editedata'
                        : StyleScreen === "createissue_top" ?
                            'icon editedata'
                            : StyleScreen === "createreviewdata_top" ?
                                'icon active' :
                                "icon"}>
                    <span>2</span>
                </span>
                <span
                    className={StyleScreen === "createissue_top" ?
                        'text editedata'
                        : StyleScreen === "createreviewdata_top" ?
                            'text active' :
                            "text"}>
                    {language === "Ar" ?
                        "اختيار الموردين" :
                        "Choose suppliers"}
                </span>
            </li>
            <span className={StyleScreen === "createissue_top" ?
                'line editedata'
                : StyleScreen === "createreviewdata_top" ?
                    'line active' :
                    "line"}>

            </span>
            <li>
                <span className={StyleScreen === "createreviewdata_top" ?
                    'icon editedata'
                    : "icon"}>
                    <span>3</span>
                </span>
                <span className={StyleScreen === "createreviewdata_top" ?
                    'text editedata'
                    : "text"}>
                    {language === "Ar" ? "مراجعة الطلب" : "Review request"}
                </span>
            </li>
        </ul>
    )
}

export default List