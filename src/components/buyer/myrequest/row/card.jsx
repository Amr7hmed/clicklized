import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Editicon from "../../../../images/icon/edit-green.png";
import IconTimer from "../../../../images/icon/icon-timer.png";

function RequestCard(props) {
    const{Item}=props;
    var day = new Date(Item.delivery_date);
    let navigate  = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

    const ShowId=(name,id)=>{
        navigate(`/showrequestbuyer/${id}`);
        scrollToTop();
    }

    
  return (
    <div className="col-12 col-md-6 col-lg-4">
    <div className='myrequest__card'>
        <div className="top">
            <span className='text'>{Item.order_num}</span>
            <button type='button' className="btn btn-edit"
            onClick={()=>ShowId(Item.order_num,Item.id)}>
                <img src={Editicon} alt="Edit icon" />
            </button>
        </div>

        <div className="bottom">
                <img src={IconTimer} alt="IconTimer" />
                <span className="text">End {" "}
                  {day.getDate()} / {day.getMonth()+1} /{day.getFullYear()}
                </span>
        </div>
    </div>
    </div>
  )
}

export default RequestCard;

