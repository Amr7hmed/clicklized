import React , { useState ,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RequestCardSeller(props) {
    const { Dataoffer } = props;
    const day = Dataoffer.delivery_date.split('T')[0];
    let navigate = useNavigate();

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


    const ShowId = (id) => {
        navigate(`/requestdetailsseller/${id}`);
        scrollToTop();
    }

    return (
        <div className='myrequestseller__card'>
            <div className="left">
                <ul>
                    <li className='name'>
                        <span className='title'>Offer number :</span>{" "}
                        <span className="data">{Dataoffer.offers_allowed}</span>
                    </li>
                    <li className='day'>{day}</li>
                    <li className='details'>{Dataoffer.notes}</li>
                </ul>
            </div>
            <div className="right">
                <span className="price">
                    {"32000 SAR"}
                </span>
                <button className='btn' type='button'
                    onClick={() => ShowId(Dataoffer.id)}>
                    Show details
                </button>
            </div>
        </div>
    )
}

export default RequestCardSeller