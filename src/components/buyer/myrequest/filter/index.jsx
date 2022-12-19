import React from 'react';
import { useContext } from 'react';
import { Authcontext } from '../../../../store/context';



function RequestFilter(props) {
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
    const{Toggle}=props;
    return (
        <div 
        className={Toggle === false ?'myrequest__filter myrequest__hide'
        : 'myrequest__filter'}>
            <div className="top">
                <h6>
                    {language === "Ar" ? "فلتر" : "Filter"}
                </h6>
                <span>
                    {language === "Ar" ? "الحالة" : "Status"}
                </span>
            </div>
            <div className="bottom">
                <select className="form-select" aria-label="Default select example"
                    placeholder='Choose status'>
                   <option defaultValue>
                    {language === "Ar" ? " اختر الحالة" : "Choose Status"}
                    </option>
                    <option value="open">
                    {language === "Ar" ? "مفتوح" : "Open"}
                    </option>
                    <option value="closed">
                    {language === "Ar" ? "مغلق" : "Closed"}
                    </option>
                </select>
                <button className="btn showresults" type="button">
                    {language === "Ar" ? "أظهر النتائج" : "Show results"}
                </button>
            </div>
        </div>
    )
}

export default RequestFilter;