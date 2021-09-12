import React from "react";
import { Pie } from "react-chartjs-2";

export default function PieChart({ pieSlices }) {
  const data = {
    labels: ["NEGATIVE", "NEUTRAL", "POSITIVE"],
    datasets: [
      {
        data: pieSlices.map((slice) => Math.round(slice * 100) / 100),
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(54, 162, 235, 0.8)",
        ],
        hoverBackgroundColor: [
          "rgba(255, 99, 132, 1.0)",
          "rgba(255, 206, 86, 1.0)",
          "rgba(54, 162, 235, 1.0)",
        ],
      },
    ],
  };

  return (
    <div>
      <Pie data={data} width={400} height={350} />
    </div>
  );
}
