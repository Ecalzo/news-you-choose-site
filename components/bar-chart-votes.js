import React from "react";
import { Bar } from "react-chartjs-2";

export default function BarChartVotes({ votes }) {
  const options = {
    title: {
      display: true,
      text: "Votes in the last 24 hours (realtime)",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  const data = {
    labels: ["Negative", "Neutral", "Positive"],
    maintainAspectRatio: true,
    datasets: [
      {
        label: "# of votes",
        data: votes.map((vote) => vote.counts),
        backgroundColor: [
          "rgba(255, 99, 132, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(54, 162, 235, 0.4)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
}
