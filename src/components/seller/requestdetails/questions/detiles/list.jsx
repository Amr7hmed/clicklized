import React, { useState } from 'react';
import Iconprofile from "../../../../../images/profile/image-one.jpg";
import IconClock from "../../../../../images/icon/icon-clock.png";
import IconPlay from "../../../../../images/icon/icon-play.png";

function QuestionsDataList() {
    const [message,setMessage]=useState("");

    const Sendmessage=()=>{
        console.log(message);
        setMessage("");
    }

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
                <li className='inputmessage'>
                    <span className="message">
                        <input type="text" placeholder='Replay here'
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        className='form-control'/>

                        <button type='button' className='btn btn-send'
                        onClick={Sendmessage}>
                        <img src={IconPlay} alt="" />
                        </button>
                    </span>
                </li>
                </ul>


            </ul>
        </div>
    )
}

export default QuestionsDataList;