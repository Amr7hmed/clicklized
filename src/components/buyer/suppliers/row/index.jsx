import React from 'react';
import { useContext } from 'react';
import EmptyRequest from '../../../../layout/empty/emptyrequest.jsx';
import { Authcontext } from '../../../../store/context';
import SuppliersCard from './card';

function SuppliersRow(props) {
  const {Data ,setLoading}=props;

  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  
  return (
    <div className='mysuppliers__row'>
      {Data.length === 0 ? 
      <EmptyRequest
      TitleEmpty={language === "Ar" ? "لم تقم بإضافة أي موردين" : "You have not added any suppliers"}/>
      :
      <>
      <div className="row">
        {Data.map(item =>
          <SuppliersCard key={item.id} Item={item} setLoading={setLoading}/>
        )}
      </div>
      </>
      }
    </div>
  )
}

export default SuppliersRow;