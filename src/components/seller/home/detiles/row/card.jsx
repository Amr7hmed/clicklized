import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Editicon from "../../../../../images/icon/edit-green.png";
import IconTimer from "../../../../../images/icon/icon-timer.png";
import { Authcontext } from '../../../../../store/context';

    function HomeRequestsCard(props) {
        const{Item}=props;
        const authcontext = useContext(Authcontext);
        const language = authcontext.language;

    const day = Item.delivery_date.split('T')[0];
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


    const Showpageoffer = (id) => {
        navigate(`/offerrequest/${id}`);
        scrollToTop();
    }

    const ShowId=(id)=>{
        navigate(`/requestdetailsseller/${id}`);
        scrollToTop();
    }

  return (
    <div className="col-12 col-md-6 col-lg-4">
    <div className='homerequests__card'>
        <div className="top">
            <span className='text'>{Item.order_num}</span>

            <button type='button' className="btn btn-edit"
                 onClick={()=>ShowId(Item.id)}>
                        <img src={Editicon} alt="Edit icon" />
            </button>
        </div>

        <div className="bottom">
            <div className="time">
                <img src={IconTimer} alt="IconTimer" />
                <span className="text">End {day}
                
                </span>
            </div>
            <div className="button-data">
                <button className="btn" type='button' onClick={()=>Showpageoffer(Item.id)}>
                    {language === "Ar" ? "?????????? ??????????" : "Send offer"}
                </button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default HomeRequestsCard;