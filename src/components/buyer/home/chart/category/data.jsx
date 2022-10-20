import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const DoughnutChart = (props) => {
  const { Datachart, labels } = props;
  const BackgroundArray = ["#e7c008", "#0870e7", "#ff9500", "#05aa86", "#6c27be", "#27be5d"];
  let i;

  for (i = 0; i < Datachart.length; i++) {
    if (Datachart[i] > 2500) {
      BackgroundArray.push("#3ba500");
    } else if (Datachart[i] < 1900) {
      BackgroundArray.push("#f14c4c");
    } else {
      BackgroundArray.push("#ff9500");
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
      <Pie data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;

