import React from 'react';
import Editicon from "../../../../../images/icon/edit-green.png";
import IconTimer from "../../../../../images/icon/icon-timer.png";

function HomeRequestsCard(props) {
    const{Item}=props;
const day = Item.delivery_date.split('T')[0];
  return (
    <div className="col-12 col-md-6 col-lg-4">
    <div className='homerequests__card'>
        <div className="top">
            <span className='text'>{Item.order_num}</span>


        </div>

        <div className="bottom">
            <div className="time">
                <img src={IconTimer} alt="IconTimer" />
                <span className="text">End {day}
                
                {/*`${Item.delivery_date.getFullYear()}/${Item.delivery_date.getMonth()+1}/${Item.delivery_date.getDate()}`*/}
                </span>
            </div>
            <div className="button-data">
                <button className="btn" type='button'>
                Send offer
                </button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default HomeRequestsCard;