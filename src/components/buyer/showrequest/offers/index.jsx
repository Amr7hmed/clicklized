import React from 'react'
import NavList from '../list/index.jsx';
import OffersDetiles from './detiles/index.jsx';

function Offersrow(props) {
  const { id, name, Stylebuttons } = props;

  return (
    <div className="showrequestdata__row">
      <NavList id={id} name={name} Stylebuttons={Stylebuttons} />
      <OffersDetiles/>
    </div>
  )
}

export default Offersrow;