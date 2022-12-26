import React from 'react';
import { useContext } from 'react';
import { Authcontext } from '../../../../store/context.js';
import FilterSellerList from './list.jsx';

function RequestFilterSeller(props) {
    const{Toggle}=props;
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
    return (
        <div 
        className={Toggle === false ?'myrequestseller__filter myrequestseller__hide'
        : 'myrequestseller__filter'}>
            <div className="top">
                <h6>
                    
          {language === "Ar" ?"فلتر":"Filter"}
          </h6>
            </div>
                <FilterSellerList/>
        </div>
    )
}

export default RequestFilterSeller;