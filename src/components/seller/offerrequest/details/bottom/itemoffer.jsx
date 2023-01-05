import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Authcontext } from '../../../../../store/context';

function ItemOffer(props) {
  const { ItemName ,Item ,Dataoffer} = props;

  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  const [state, setState] = useState({
    "order_item_id":Item.id,
    "quantity":"",
    "price_per_item":""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
    console.log(state);
    Dataoffer.push(state)
  };

  return (
  <div className="inputform_item">
    <div className="row">
      <h6 className='col-12'>{ItemName}</h6>
          <br />
      <div className="col-lg-6 col-md-12">
        <label>
          {language === "Ar" ? "الكمية" : "Quantity"}
        </label>
        <br />
        <br />
        <input type="text" placeholder=
          {language === "Ar" ? "إدخل الكمية" : "Enter Quantity"}
          className={"form-control"}
          name="quantity"
          onChange={handleChange} />
      </div>
      <div className="col-lg-6 col-md-12">
        <label>
          {language === "Ar" ? "السعر لكل عنصر" : "Price per one item"}
        </label>
        <br />
        <br />
        <input type="text" placeholder=
          {language === "Ar" ? "أدخل السعر" : "Enter Price"}
          className={"form-control"} 
          name="price_per_item"
          onChange={handleChange} />
      </div>
    </div>
          <br />
  </div>
  )
}

export default ItemOffer;