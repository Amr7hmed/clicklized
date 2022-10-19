import React from 'react';
import Editicon from "../../../../images/icon/edit-green.png";
import IconRemove from "../../../../images/icon/icon-remove.svg";
import ModelEditSuppliers from '../modal/modeleditsuppliers';

function RequestCard(props) {
    const { Item } = props;


    const DeleteItem = (id) => {
        console.log(id);
    }
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className='mysuppliers__card'>
                <div className="top">

                    <span className='text'>{Item.name}</span>

                    <div>

                    <button type='button' className="btn btn-edit"
            data-bs-toggle="modal" data-bs-target={"#modeleditsuppliers-"+ Item.id}>
                        <img src={Editicon} alt="Edit icon" />
                    </button>
                    <button type='button' className="btn btn-remove"
                        onClick={() => DeleteItem(Item.id)}>
                        <img src={IconRemove} alt="Remove icon" />
                    </button>


                    </div>
                </div>

                <div className="bottom">
                    <span className="text">{Item.industry}</span>
                </div>
            </div>
            <ModelEditSuppliers Id={Item.id}/>
        </div>
    )
}

export default RequestCard