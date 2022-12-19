import React from 'react';
import IconSavemodal from "../../images/icon/savemodalicon.png";
import IconClosemodal from "../../images/icon/closemodal.png";
import { Authcontext } from '../../store/context';
import { useContext } from 'react';

function SaveData(props) {
    const {toggolemodal ,setToggolemodal ,SendData ,CansalchingImage}=props
    
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;

    return (
        <div className={'modalsavedata'}>

            <div className="modaldata">
                <div className="modaldataheader">
                    <button type='button' className='btn btn-close'>
                        <img src={IconClosemodal} alt="Icon Close modal"
                        onClick={()=>setToggolemodal(false)} />
                    </button>
                </div>
                <div className="modaldatabody">
                    <img src={IconSavemodal} alt="Icon Save modal" />
                    <span className='text'>
                        {language === "Ar" ? 
                        "هل أنت متأكد أنك تريد حفظ التعديلات؟" : 
                        "Are you sure you want to save edits?"}
                    </span>
                </div>

                <div className="modaldataend">
                    
                    <button type='button' className='btn btn-save'
                    onClick={SendData}>
                    {language === "Ar" ? "حفظ" : "Yes"}
                    </button>
                    
                    <button type='button' className='btn btn-cancel'
                    onClick={CansalchingImage}>
                    {language === "Ar" ? "ألغاء" : "Cancel"}
                    </button>

                </div>
            </div>
        </div>
    )
}

export default SaveData;