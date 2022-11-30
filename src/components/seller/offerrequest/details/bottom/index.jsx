import React from 'react';
import ItemOffer from './itemoffer';
import NotesOffer from './notes';

function RequestDatatBottom() {

  return (
    <div className='requestdetailsbottom'>
      <div className='screenone'>


        <div className="requestdetailsbottom__data">
          
              <ItemOffer/>
              <br/>
              <ItemOffer/>
              <br/>
              <ItemOffer/>
              <br/>
              <ItemOffer/>
              <br/>
              <ItemOffer/>
              <br/>
              <NotesOffer/>

              <br />
              <div className='end'>

              <button type='button' className='btn btn-next button-active'>
              Send offer
              </button>
              </div>
        </div>
      </div>
    </div>
  )
}

export default RequestDatatBottom;