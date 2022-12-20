import React from 'react';
import { useContext } from 'react';
import IconProfile from "../../../../../images/icon/img-profile.jpg";
import { Authcontext } from '../../../../../store/context';


function ItemSupplier(props) {
    const { item, AddSuppliers } = props;

    const authcontext = useContext(Authcontext);
    const supplierslistrequest = authcontext.supplierslistrequest;
    const language = authcontext.language;

    var newArray = supplierslistrequest.filter(function (el) {
        return el.id === item.id;
    });
    return (
        <div className="item" key={item.id}>
            <span className='data'>
                <img src={item.image === undefined ? IconProfile : item.image} alt={item.company_name}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                            "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg";
                    }} />
                <span className="text">{item.company_name}</span>
            </span>
            <button type='button'
                className={newArray.length === 0 ? 'btn btn-add-item' : 'btn btn-add-item active'}
                onClick={(e) => AddSuppliers(e, item)}>
                {newArray.length === 0 ?
                <>
            {language === "Ar" ? "أضافه": "Add"}
                </>  : <>
            {language === "Ar" ? "مضاف":  "Added"}
                </>
                }
            </button>
        </div>
    )
}

export default ItemSupplier;