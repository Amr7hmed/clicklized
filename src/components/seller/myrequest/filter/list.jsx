import React from 'react'
import DatePickerdataEnd from './DatePickerdataEnd.jsx';
import DatePickerdataStarting from './DatePickerdataStarting.jsx';

function FilterSellerList() {
    return (
        <div className="bottom">
            <div className="listitem">
                <span>Status</span>
                <select className="form-select" aria-label="Default select example"
                    placeholder='Choose status'>
                    <option defaultValue>Choose status</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="listitem">
                <span>Starting date</span>
                <DatePickerdataStarting/>
                </div>
            <div className="listitem">
                <span>Ending date</span>
                <DatePickerdataEnd/>
                </div>
            <button className="btn showresults" type="button">Show results</button>
        </div>
    )
}

export default FilterSellerList;