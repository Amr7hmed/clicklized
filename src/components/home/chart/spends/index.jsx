import React, { useState } from 'react';
import TopChart from '../charttop.jsx';
import BarChart from './data.jsx';

function Spends() {
    const datas2020 = [ 2000, 1700,4000,5000, 2500, 1800, 2000,1500, 4500, 2200, 1500, 4000];
    const datas2021 = [5000, 2500, 1800, 4000, 2000, 1700, 2000,1500, 4500, 2200, 1500, 4000];
    const datas2022 = [1500, 4500, 2200, 1500,5000, 2500, 1800, 4000, 2000, 1700, 2000, 4000];
    const labels = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
    const Years =["2020","2021","2022"];
    const [datayear,setDatayear]=useState("2020");
    const Data=[];

if(datayear === "2020"){
    Data.push(...datas2020);
}else if(datayear === "2021"){
    Data.push(...datas2021);
}else{
    Data.push(...datas2022);
}

  return (
    <div className='spends'>
        <TopChart Title={"Spends"} Years={Years} setDatayear={setDatayear} Datayear={datayear}/>
        <BarChart Datachart={Data} labels={labels}/>
    </div>
  )
}

export default Spends