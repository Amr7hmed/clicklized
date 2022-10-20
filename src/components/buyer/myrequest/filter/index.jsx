import React from 'react';

function RequestFilter(props) {
    const{Toggle}=props;
    return (
        <div 
        className={Toggle === false ?'myrequest__filter myrequest__hide'
        : 'myrequest__filter'}>
            <div className="top">
                <h6>Filter</h6>
                <span>Status</span>
            </div>
            <div className="bottom">
                <select className="form-select" aria-label="Default select example"
                    placeholder='Choose status'>
                    <option defaultValue>Choose status</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <button className="btn showresults" type="button">Show results</button>
            </div>
        </div>
    )
}

export default RequestFilter;