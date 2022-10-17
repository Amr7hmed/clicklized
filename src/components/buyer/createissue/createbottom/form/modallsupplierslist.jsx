import React from 'react';
import IconProfile from "../../../../../images/icon/img-profile.jpg";

function ModalSuppliersList(props) {
  const {SupplierslistItems,setSupplierslistItems}=props;

  const  supplierslist=[
    {id:1,img:IconProfile,name:"Supplier name",status:0},
    {id:2,img:IconProfile,name:"Supplier name",status:0},
    {id:3,img:IconProfile,name:"Supplier name",status:1},
    {id:4,img:IconProfile,name:"Supplier name",status:0},
    {id:5,img:IconProfile,name:"Supplier name",status:0},
    {id:6,img:IconProfile,name:"Supplier name",status:0},
    {id:7,img:IconProfile,name:"Supplier name",status:1},
    {id:8,img:IconProfile,name:"Supplier name",status:0},
    {id:9,img:IconProfile,name:"Supplier name",status:1},
    {id:10,img:IconProfile,name:"Supplier name",status:0}
];
    const AddSuppliers=(item)=>{
      console.log(item);
      setSupplierslistItems(SupplierslistItems,item)
    }
  return (
  <div className="modal fade" id="modallsupplierslist" tabIndex="-1" 
  aria-labelledby="modallsupplierslistLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
        ></button>
      </div>
        <h5 className="modal-title" id="modallsupplierslistLabel">Choose suppliers</h5>
      <div className="modal-body">

        <div className="listitems">
          {supplierslist.map(item=>
            <div className="item" key={item.id}>
              <span className='data'>
                <img src={item.img} alt={item.name} />
                <span className="text">{item.name}</span>
              </span>
              <button type='button' 
              className={item.status === 0?'btn btn-add-item':'btn btn-add-item active'}
              onClick={()=>AddSuppliers(item)}>
                {item.status === 0?"Add":"Added"}
              </button>
            </div>
            )}
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-save" data-bs-dismiss="modal">Done</button>
        <button type="button" className="btn btn-close_modal" data-bs-dismiss="modal">Cancel</button>
      </div>
    </div>
  </div>
</div>

  )
}

export default ModalSuppliersList;