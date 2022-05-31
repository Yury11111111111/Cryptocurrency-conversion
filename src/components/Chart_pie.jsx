import React from "react";
import { Pie } from "react-chartjs-2";
import 'chart.js/auto';

function Chart_pie(props) {
  const data = {
    labels: ["Bitcoin", "Ethereum"],
    datasets: [
      {
        data: [props.bitcoin, props.ethereum],
        backgroundColor: ["orange", "grey"],
      },
    ],
  };
  return <Pie data={data} />;
}

export default Chart_pie;
