import React from 'react';
import SuppliersCard from './card';

function SuppliersRow() {
  const Data = [
    { id: 1, name: "Company Name", industry: "Company industry" },
    { id: 2, name: "Company Name", industry: "Company industry" },
    { id: 3, name: "Company Name", industry: "Company industry" },
    { id: 4, name: "Company Name", industry: "Company industry" },
    { id: 5, name: "Company Name", industry: "Company industry" },
    { id: 6, name: "Company Name", industry: "Company industry" },
  ]
  return (
    <div className='mysuppliers__row'>
      <div className="row">
        {Data.map(item =>
          <SuppliersCard key={item.id} Item={item} />
        )}
      </div>
    </div>
  )
}

export default SuppliersRow;