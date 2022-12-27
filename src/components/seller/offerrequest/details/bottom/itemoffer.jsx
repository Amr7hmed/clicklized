import React from 'react';
import { useContext } from 'react';
import { Authcontext } from '../../../../../store/context';

function ItemOffer(props) {
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;

    const {Item}=props;
    return (<div className="inputform_item">
        <div className="row">
            <h6 className='col-12'>{Item}</h6>
            <div className="col-lg-6 col-md-12">
                <label>
                  {language === "Ar" ? "الكمية" : "Quantity"}
                    
                </label>
                <br />
                <br />
                <input type="text" placeholder=
                  {language === "Ar" ? "إدخل الكمية" : "Enter Quantity"}
                   className={"form-control"} />
            </div>
            <div className="col-lg-6 col-md-12">
                <label>
                  {language === "Ar" ? "السعر لكل عنصر" : "Price per one item"}
                    
                </label>
                <br />
                <br />
                <input type="text" placeholder=
                  {language === "Ar" ? "أدخل السعر" : "Enter Price"}
                 className={"form-control"} />
            </div>
        </div>
    </div>
    )
}

export default ItemOffer;