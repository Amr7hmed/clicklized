import React from "react";
import Chart from "chart.js/auto";
import {  Doughnut } from "react-chartjs-2";

const DoughnutChart = (props) => {
    const{Dataspends,BackgroundArray,labels}=props;
  const data = {
    labels: labels,
    animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true
        }
      },
      scales: {
        y: { // defining min and max so hiding the dataset does not change scale range
          min: 0,
          max: 100
        }
      },
    datasets: [
      {
        label: "",
        backgroundColor:BackgroundArray,
        data: Dataspends,
        legend: {
          position: 'right',
        },
      },
    ],
  };
  return (
    <div className="one">
      <Doughnut data={data}/>
    </div>
  );
};

export default DoughnutChart;

