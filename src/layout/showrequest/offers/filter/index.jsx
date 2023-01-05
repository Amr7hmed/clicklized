import React from 'react';
import { useContext } from 'react';
import { Authcontext } from '../../../../store/context';

import DatePickerdataEnd from './datepickerend';
import DatePickerdatastart from './datepickerstart';

function OffersFilter(props) {
    const { Toggle } = props;
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
    return (
        <div
            className={Toggle === false ? 'offersdetiles__filter offersdetiles__hide'
                : 'offersdetiles__filter'}>
            <div className={Toggle === false ? "top hidedata" : "top"}>
                <h6>
                    {language === "Ar" ? "فلتر" : "Filter"}
                </h6>
            </div>
            <div className={Toggle === false ? "bottom hidedata" : "bottom"}>
                <div className='inputform'>
                    <label className="form-label">
                        {language === "Ar" ? "الحالة" : "Status"}
                    </label>
                    <select className="form-select" aria-label="Default select example"
                        placeholder='Choose status' defaultValue="choose">
                        <option value="choose">
                        {language === "Ar" ? "اختر الحالة" : "Choose status"}
                        </option>
                        <option value="1">
                        {language === "Ar" ? "مفتوح" : "Open"}
                        </option>
                        <option value="2">
                        {language === "Ar" ? "مغلق" : "Close"}
                        </option>
                    </select>
                </div>
                <div className='inputform'>
                    <label className="form-label">
                        {language === "Ar" ? "تاريخ البدء" : "Starting date"}
                    </label>
                    <DatePickerdatastart 
                    data={language === "Ar" ? "اختر تاريخ البدء" :'Choose starting date'}/>
                </div>


                <div className='inputform'>
                    <label className="form-label">
                    {language === "Ar" ? "اختر تاريخ الانتهاء" :'Choose ending date'}
                    </label>
                    <DatePickerdataEnd  
                    data={language === "Ar" ? "اختر تاريخ الانتهاء" :'Choose ending date'}/>
                </div>
                <button className="btn showresults" type="button">
                    {language === "Ar" ? "أظهر النتائج" :'Show results'}
                    </button>
            </div>
        </div>
    )
}

export default OffersFilter;