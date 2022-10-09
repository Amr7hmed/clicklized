import React, { useState } from 'react';
import TopChart from '../charttop.jsx';
import DoughnutChart from './data.jsx';

function Requests() {
    const datas2020 = [5000, 2500, 1800];
    const datas2021 = [1800, 2500, 5000];
    const datas2022 = [2500, 1800, 5000];

    const labels = ["Accepted", "Rejected", "Under Process"];
    const BackgroundArray = [];
    const Years = ["2020", "2021", "2022"];
    const [datayear, setDatayear] = useState("2020");
    const Data = [];


    if (datayear === "2020") {
        Data.push(...datas2020);
    } else if (datayear === "2021") {
        Data.push(...datas2021);
    } else {
        Data.push(...datas2022);
    }
    return (
        <div className='requests'>
            <TopChart Title={"Spends"} Years={Years} setDatayear={setDatayear} Datayear={datayear} />
            <DoughnutChart Datachart={Data} labels={labels} />
        </div>
    )
}

export default Requests;