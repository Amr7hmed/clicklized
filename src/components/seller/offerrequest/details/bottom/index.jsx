import React from 'react';
import { useContext } from 'react';
import { Authcontext } from '../../../../../store/context';
import ItemOffer from './itemoffer';
import NotesOffer from './notes';

function RequestDatatBottom() {

  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  return (
    <div className='offerdetailsbottom'>
      <div className='screenone'>


        <div className="offerdetailsbottom__data">

          <ItemOffer Item={language === "Ar" ? "أسم العنصر" : "Item name"}/>
          <br />
          <ItemOffer Item={language === "Ar" ? "أسم العنصر" : "Item name"}/>
          <br />
          <ItemOffer Item={language === "Ar" ? "أسم العنصر" : "Item name"}/>
          <br />
          <ItemOffer Item={language === "Ar" ? "أسم العنصر" : "Item name"}/>
          <br />
          <ItemOffer Item={language === "Ar" ? "أسم العنصر" : "Item name"}/>
          <br />
          <NotesOffer />

          <br />
          <div className='end'>
            <div className="row">
              <div className="col-12">

                <button type='button' className='btn button-active'>
                  {language === "Ar" ? "إرسال العرض" : "Send offer"}
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