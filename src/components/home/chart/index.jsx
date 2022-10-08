import React from 'react';
import Requests from './requests/index.jsx';
import Spends from './spends/index.jsx';

function Chart() {
    return (
        <div className='chart'>
            <div className="container">
                <div className="chart__item">

                <Spends />
                <Requests/>
                </div>
            </div>
        </div>
    )
}

export default Chart