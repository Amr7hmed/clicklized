import React ,{ useContext,useState, useEffect }from "react";
import { GetDataoffersSupplier } from "../../../api/actions.js";
import RequestitemsSeller from '../../../components/seller/myrequest/index.jsx';
import Navbar from '../../../components/seller/navbar/index.jsx';
import Loading from "../../../layout/loading/loading.jsx";
// Api
import { Authcontext } from "../../../store/context.js";

function MyOffersSeller() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    GetDataoffersSupplier(setLoading, setData);
  }, [loading]);


  return (
    <>
    {loading === false ? (
      <Loading />
    ) : (
      <section className='myrequestseller'>
          <Navbar/>
          <RequestitemsSeller Data={data} 
          TitleEmpty={language === "Ar" ? "لم تقم بإضافة أي عرض حتى الآن" : "You have not added any offer yet"}/>
      </section>
    )}
  </>
  )
}

export default MyOffersSeller;