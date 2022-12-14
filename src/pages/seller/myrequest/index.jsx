import React ,{ useContext,useState, useEffect }from "react";
import RequestitemsSeller from '../../../components/seller/myrequest/index.jsx';
import Navbar from '../../../components/seller/navbar/index.jsx';
import Loading from "../../../layout/loading/loading.jsx";
// Api
import { GetDataRequestSupplier } from "../../../api/actions.js";
import { Authcontext } from "../../../store/context.js";

function MyRequestSeller() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    GetDataRequestSupplier(setLoading, setData);
  }, [loading]);


  return (
    <>
    {loading === false ? (
      <Loading />
    ) : (
      <section className='myrequestseller'>
          <Navbar Styleclass={"btnmyrequestseller"}/>
          <RequestitemsSeller Data={data}
          TitleEmpty={language === "Ar" ? 
          "لا توجد أي طلبات حتى الآن"
          : "There are no requests yet"}/>
      </section>
    )}
  </>
  )
}

export default MyRequestSeller;