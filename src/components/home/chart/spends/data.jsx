import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = (props) => {
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
        borderColor: "rgb(255, 99, 132)",
        data: Dataspends,
      },
    ],
    options: {
      datalabels: {
        display: false,
      },
    }
  };
  
  const options = {
    legend: {
      display: true,
      position: "bottom"
    }
  };
  return (
    <div>
      <Bar data={data} options={options}/>
    </div>
  );
};

export default BarChart;

