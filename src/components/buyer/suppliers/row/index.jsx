import React from 'react';
import EmptySuppliers from '../../../../layout/empty/emptysuppliers';
import SuppliersCard from './card';

function SuppliersRow(props) {
  const {Data ,setLoading}=props;
  
  return (
    <div className='mysuppliers__row'>
      {Data.length === 0 ? 
      <EmptySuppliers/>
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