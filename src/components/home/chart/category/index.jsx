import React, { useState } from 'react';
import TopChart from '../charttop.jsx';
import DoughnutChart from './data.jsx';

function Category() {
  const datas2020 = [50, 30, 20, 30, 20, 50];
  const datas2021 = [20, 30, 50, 30, 50, 20];
  const datas2022 = [30, 20, 50, 20, 50, 30];

  const labels = ["Packing", "Bank", "F&B", "Ingredients", "Packing", "IT"];
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
    <div className='category'>
      <TopChart Title={"Category"} Years={Years} setDatayear={setDatayear} Datayear={datayear} />
      <DoughnutChart Datachart={Data} labels={labels} />
    </div>
  )
}

export default Category;