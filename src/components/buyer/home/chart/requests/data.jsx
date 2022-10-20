import React from "react";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = (props) => {
  const { Datachart, labels } = props;
  const BackgroundArray = [];
  let i;

  for (i = 0; i < Datachart.length; i++) {
    if (Datachart[i] > 2500) {
      BackgroundArray.push("#3ba500");
    } else if (Datachart[i] < 1900) {
      BackgroundArray.push("#27beb8");
    } else {
      BackgroundArray.push("#0870e7");
    }
  }

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
        backgroundColor: BackgroundArray,
        data: Datachart,
        legend: {
          position: 'right',
        },
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        ltr: true,
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
        }
      }
    },
  }
  return (
    <div className="cartitem">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;

