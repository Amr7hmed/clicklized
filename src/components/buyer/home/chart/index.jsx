import React, { useState ,useEffect ,useContext} from 'react';
import { GetDataRequest } from '../../../../api/buyer/actions.js';

import Loading from '../../../../layout/loading/loading.jsx';
import { Authcontext } from '../../../../store/context.js';
import Category from './category/index.jsx';
import ChartBottom from './chartbottom.jsx';
import ChartHeadr from './chartheadr.jsx';
import Requests from './requests/index.jsx';
import Spends from './spends/index.jsx';

function Chart() {
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      GetDataRequest(setLoading,setData);
    }, [loading]);

    return (
        <>
        {loading === false ? (
          <Loading/>
        ) : (
        <div className='chart'>
            <div className="container">
                <ChartHeadr Title=
                    {language === "Ar" ? "طلباتي" : "My requests"}
                    Line={language === "Ar" ? `طلب ${data.length}` : `${data.length} requests`} />
                <div className="row">
                    <div className="col-xl-4 col-lg-12 col-sm-12">
                        <Spends />
                    </div>
                    <div className="col-xl-4 col-lg-12 col-sm-12">
                        <Requests />
                    </div>
                    <div className="col-xl-4 col-lg-12 col-sm-12">
                        <Category />
                    </div>

                </div>
                <ChartBottom Data={data}/>
            </div>
        </div>
        )}
        </>
    )
}

export default Chart