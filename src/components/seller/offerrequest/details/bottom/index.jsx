import React from 'react';
import { useContext } from 'react';
import { Authcontext } from '../../../../../store/context';
import ItemOffer from './itemoffer';
import NotesOffer from './notes';

function RequestDatatBottom(props) {
  const {Data}=props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  
  const Dataoffer =[];
  
  const handleChlick = () => {
    console.log(Dataoffer);
};


  return (
    <div className='offerdetailsbottom'>
      <div className='screenone'>


        <div className="offerdetailsbottom__data">
          <br />
          
          {Data.map((item , index) =>
          <ItemOffer ItemName={item.item.name} Item={item} key={index} Dataoffer={Dataoffer}/>
            )}
           
          <br />
          <NotesOffer />

          <br />
          <div className='end'>
            <div className="row">
              <div className="col-12">

                <button type='button' className='btn button-active'
                onClick={handleChlick}>
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