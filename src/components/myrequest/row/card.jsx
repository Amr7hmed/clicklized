import React from 'react';
import Editicon from "../../../images/icon/edit-green.png";
import IconTimer from "../../../images/icon/icon-timer.png";

function RequestCard(props) {
    const{Item}=props;
    const ShowId=(e)=>{
        console.log(e);
    }
    console.log(Item.id);
  return (
    <div className="col-12 col-md-6 col-lg-4">
    <div className='myrequest__card'>
        <div className="top">
            <span className='text'>{Item.name}</span>
            <button type='button' className="btn btn-edit"
            onClick={()=>ShowId(Item.id)}>
                <img src={Editicon} alt="Edit icon" />
            </button>
        </div>

        <div className="bottom">
                <img src={IconTimer} alt="IconTimer" />
                <span className="text">End {Item.time}</span>
        </div>
    </div>
    </div>
  )
}

export default RequestCard