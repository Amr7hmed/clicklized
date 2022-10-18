import React from 'react'
import NavList from '../list';
import RequestDatatBottom from './form';
import IconProfile from "../../../../images/icon/img-profile.jpg";

function Showrequestrow(props) {
  const { id, name ,Stylebuttons } = props;
  const state = {
    numberrequired: "test",
    items: [
        {
            item:"one",
            quantity:"1"
        },
        {
            item:"two",
            quantity:"2"
        },
    ],
    address: "21 set-test cairo",
    day: "25/10/2022",
    inputinsurance: "yes",
    transportation: "included",
    notes: "test data",
    fileslist: ["file.pdf","fileone.pdf","filetwo.pdf"],
    supplierslist: [
        {
            id:1,
            img:IconProfile,
            name:"Supplier name"
        },{
            id:2,
            img:IconProfile,
            name:"Supplier name"
        }
    ],
    checkboxtoggle: true,
};

  return (
  <div className="showrequestdata__row">
    <NavList id={id} name={name} Stylebuttons={Stylebuttons}/>
    <RequestDatatBottom state={state}/>
  </div>
  )
}

export default Showrequestrow;