import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = (props) => {
  const { Datachart, labels } = props;
  const BackgroundArray = [];
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
        borderColor: "rgb(255, 99, 132)",
        data: Datachart,
      },
    ],
    options: {
      datalabels: {
        display: false,
      },
    }
  };

  const options = {
    plugins: {
      legend: {
        display: false,
        position: 'right',
        rtl: true,
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          font: {
            size: 8
          }
        }
      }
    },
  }
  return (
    <div className="cartitem">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;

