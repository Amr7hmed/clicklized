import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../../../store/context';

function RequestCardSeller(props) {
  const { Data } = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const day = Data.delivery_date.split('T')[0];

  let navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  let location = useLocation(),
    textlocation = location.pathname,
    myoffersseller = textlocation.includes("myoffersseller"),
    myrequestseller = textlocation.includes("myrequestseller");

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
    if(myrequestseller === true ){
      navigate(`/requestdetailsseller/${id}`);
      scrollToTop();
    }else{
      navigate(`/offersseller/${id}`);
      scrollToTop();
    }
  }

  return (
    <div className='myrequestseller__card'>
      <div className="left">
        <ul>
          <li className='name'>
            <span className='title'>
              {myrequestseller === true ? <>
                {language === "Ar" ? "رقم الأوردار" : "Order Number"}
              </> : <>
                {language === "Ar" ? 'رقم العرض' : "Offer Number"}
              </>
              }
              :</span>{" "}
            <span className="data">
              {myrequestseller === true ? <>
              {Data.order_num}
              </> : <>
              test 
              </>
              }


            </span>
          </li>
          <li className='day'>{day}</li>
          <li className='details'>{Data.notes}</li>
        </ul>
      </div>
      <div className="right">
        <span className="price">
          {/*{"32000 SAR"}*/}
        </span>
        <button className='btn' type='button'
          onClick={() => ShowId(Data.id)}>
          {language === "Ar" ? "التفاصيل" : "Show details"}
        </button>
      </div>
    </div>
  )
}

export default RequestCardSeller