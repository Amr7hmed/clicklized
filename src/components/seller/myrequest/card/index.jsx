import React from 'react';
import { useNavigate } from 'react-router-dom';

function RequestCardSeller(props) {
    const {Dataoffer}=props;
    let navigate  = useNavigate();
    
    const ShowId=(name,id)=>{
        navigate(`/requestdetailsseller/${name}/${id}`);
    }

  return (
    <div className='myrequestseller__card'>
        <div className="left">
            <ul>
                <li className='name'>
                    <span className='title'>Offer number :</span>{" "}
                    <span className="data">{Dataoffer.name}</span>
                </li>
                <li className='day'>{Dataoffer.day}</li>
                <li className='details'>{Dataoffer.details}</li>
            </ul>
        </div>
        <div className="right">
            <span className="price">
                {Dataoffer.price}
            </span>
            <button className='btn' type='button'
            onClick={()=>ShowId(Dataoffer.name,Dataoffer.id)}>
            Show details
            </button>
        </div>
    </div>
  )
}

export default RequestCardSeller