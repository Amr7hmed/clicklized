import React from 'react'

function List(props) {
    const { StyleScreen } = props;
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
                    Request details</span>
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
                    Choose suppliers
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
                    Review request</span>
            </li>
        </ul>
    )
}

export default List