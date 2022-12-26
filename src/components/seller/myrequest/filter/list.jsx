import React from 'react'
import { useContext } from 'react';
import { Authcontext } from '../../../../store/context.js';
import DatePickerdataEnd from './DatePickerdataEnd.jsx';
import DatePickerdataStarting from './DatePickerdataStarting.jsx';

function FilterSellerList() {
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;

    return (
        <div className="bottom">
            <div className="listitem">
                <span>
                    {language === "Ar" ? "الحالة" : "Status"}
                </span>
                <select className="form-select" aria-label="Default select example"
                    placeholder='Choose status'>
                    <option defaultValue>
                        {language === "Ar" ? "أختر الحالة" : "Choose status"}
                    </option>
                    <option value="1">
                        {language === "Ar" ? "مفتوح" : "Open"}
                        </option>
                    <option value="2">
                        {language === "Ar" ? "مغلق" : "Close"}
                    </option>
                </select>
            </div>
            <div className="listitem">
                <span>
                        {language === "Ar" ? "تاريخ البداء" : "Starting date"}
                </span>
                <DatePickerdataStarting />
            </div>
            <div className="listitem">
                <span>
                        {language === "Ar" ? "تاريخ الأنتهاء" : "Ending date"}
                </span>
                <DatePickerdataEnd />
            </div>
            <button className="btn showresults" type="button">
                        {language === "Ar" ? "أظهر النتائج" : "Show results"}
            </button>
        </div>
    )
}

export default FilterSellerList;