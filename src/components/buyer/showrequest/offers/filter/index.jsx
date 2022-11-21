import React from 'react';
import DatePickerdataEnd from './datepickerend';
import DatePickerdatastart from './datepickerstart';

function OffersFilter(props) {
    const{Toggle}=props;
    return (
        <div 
        className={Toggle === false ?'offersdetiles__filter offersdetiles__hide'
        : 'offersdetiles__filter'}>
            <div className={Toggle === false ?"top hidedata":"top"}>
                <h6>Filter</h6>
            </div>
            <div className={Toggle === false ?"bottom hidedata":"bottom"}>
                <div className='inputform'>
                    <label className="form-label">Status</label>
                <select className="form-select" aria-label="Default select example"
                    placeholder='Choose status'>
                    <option selected>Choose status</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                </div>
                <div className='inputform'>
                    <label className="form-label">Starting date</label>
                    <DatePickerdatastart />
                    </div>

                    
                <div className='inputform'>
                    <label className="form-label">Starting date</label>
                    <DatePickerdataEnd/>
                    </div>
                <buton className="btn showresults" type="button">Show results</buton>
            </div>
        </div>
    )
}

export default OffersFilter;