import React from 'react'

function RequestCardSeller(props) {
    const {Dataoffer}=props;
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
            <button className='btn' type='button'>
            Show details
            </button>
        </div>
    </div>
  )
}

export default RequestCardSeller