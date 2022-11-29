import React from 'react';
import Category from './category/index.jsx';
import ChartBottom from './chartbottom.jsx';
import ChartHeadr from './chartheadr.jsx';
import Requests from './requests/index.jsx';
import Spends from './spends/index.jsx';

function Chart() {
    return (
        <div className='chart'>
            <div className="container">
                <ChartHeadr Title={"My requests"} Line={"7 requests"} />
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
                <ChartBottom />
            </div>
        </div>
    )
}

export default Chart