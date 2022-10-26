import React from 'react';
import FilterSellerList from './list.jsx';

function RequestFilterSeller(props) {
    const{Toggle}=props;
    return (
        <div 
        className={Toggle === false ?'myrequestseller__filter myrequestseller__hide'
        : 'myrequestseller__filter'}>
            <div className="top">
                <h6>Filter</h6>
            </div>
                <FilterSellerList/>
        </div>
    )
}

export default RequestFilterSeller;