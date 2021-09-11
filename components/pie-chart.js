import React from "react";
import { Pie } from "react-chartjs-2";

export default function PieChart({ pieSlices }) {
  const data = {
    labels: ["NEGATIVE", "NEUTRAL", "POSITIVE"],
    datasets: [
      {
        data: pieSlices,
        backgroundColor: ["#FF0000", "#36A2EB", "#85ff5f"],
        hoverBackgroundColor: ["#FF0000", "#36A2EB", "#85ff5f"],
      },
    ],
  };

  return (
    <div>
      <Pie data={data} width={400} height={350} />
    </div>
  );
}
