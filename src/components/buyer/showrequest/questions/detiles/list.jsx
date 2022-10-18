import React from 'react';
import Iconprofile from "../../../../../images/profile/image-one.jpg";
import IconClock from "../../../../../images/icon/icon-clock.png";
import IconPlay from "../../../../../images/icon/icon-play.png";

function QuestionsDataList() {
    return (
        <div className='questionsdatalist'>
            <ul>
                <li>
                    <span className='top'>
                        <span className='data'><img src={Iconprofile} />Ahmed omran</span>
                        <span className="time"><img src={IconClock} />22/02/2022{" "}3:50 PM</span>
                    </span>
                    <span className="end">Question body here and it may contain one or more lines?</span>
                </li>

                <ul>
                <li>
                    <span className='top'>
                        <span className='data'><img src={Iconprofile} />Ahmed omran</span>
                        <span className="time"><img src={IconClock} />22/02/2022{" "}3:50 PM</span>
                    </span>
                    <span className="end">Question body here and it may contain one or more lines?</span>
                </li>
                <li>
                    <span className="playaudio">
                        <span className="text">Replay here</span>
                        <img src={IconPlay} alt="" />
                    </span>
                </li>
                </ul>


            </ul>
        </div>
    )
}

export default QuestionsDataList;