import React from 'react'

function ItemOffer(props) {
    const {Item}=props;
    return (<div className="inputform_item">
        <div className="row">
            <h6 className='col-12'>{Item}</h6>
            <div className="col-lg-6 col-md-12">
                <label>Quantity</label>
                <br />
                <br />
                <input type="text" placeholder="Enter Quantity" className={"form-control"} />
            </div>
            <div className="col-lg-6 col-md-12">
                <label>Price per one item</label>
                <br />
                <br />
                <input type="text" placeholder="Enter Price" className={"form-control"} />
            </div>
        </div>
    </div>
    )
}

export default ItemOffer;