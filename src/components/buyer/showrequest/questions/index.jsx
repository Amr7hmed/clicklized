import React from 'react'
import NavList from '../list/index.jsx';
import ShowQuestionsData from './detiles/index.jsx';

function Showrequestrow(props) {
  const { id, name, Stylebuttons } = props;

  return (
    <div className="showrequestdata__row">
      <NavList id={id} name={name} Stylebuttons={Stylebuttons} />
      <ShowQuestionsData/>
    </div>
  )
}

export default Showrequestrow;