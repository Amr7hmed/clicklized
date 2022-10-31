import React from 'react';
import { useNavigate } from 'react-router-dom';
import Editicon from "../../../../../images/icon/edit-green.png";
import IconTimer from "../../../../../images/icon/icon-timer.png";

function HomeRequestsCard(props) {
    const{Item}=props;
    let navigate  = useNavigate();

    
    const ShowId=(name,id)=>{
        console.log(name);
        console.log(id);
        //navigate(`/showrequest/${name}/${id}`);
    }
  return (
    <div className="col-12 col-md-6 col-lg-4">
    <div className='homerequests__card'>
        <div className="top">
            <span className='text'>{Item.name}</span>

            {Item.offer === 1 ? "":
            <button type='button' className="btn btn-edit"
            onClick={()=>ShowId(Item.name,Item.id)}>
                <img src={Editicon} alt="Edit icon" />
            </button>
            }

        </div>

        <div className="bottom">
            <div className="time">
                <img src={IconTimer} alt="IconTimer" />
                <span className="text">End {Item.time}</span>
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