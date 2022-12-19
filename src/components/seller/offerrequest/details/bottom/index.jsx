import React from 'react';
import ItemOffer from './itemoffer';
import NotesOffer from './notes';

function RequestDatatBottom() {

  return (
    <div className='offerdetailsbottom'>
      <div className='screenone'>


        <div className="offerdetailsbottom__data">

          <ItemOffer Item={"Item 1"}/>
          <br />
          <ItemOffer Item={"Item 2"}/>
          <br />
          <ItemOffer Item={"Item 3"}/>
          <br />
          <ItemOffer Item={"Item 4"}/>
          <br />
          <ItemOffer Item={"Item 5"}/>
          <br />
          <NotesOffer />

          <br />
          <div className='end'>
            <div className="row">
              <div className="col-12">

                <button type='button' className='btn button-active'>
                  Send offer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestDatatBottom;