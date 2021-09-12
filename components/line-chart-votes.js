import React from "react";
import { Line } from "react-chartjs-2";

export default function LineChartVotes({ votes }) {
  const labels = votes.map((vote) => vote.date.slice(0, 10));
  const options = {
    title: {
      display: true,
      text: "Voting Activity for the Past 20 Days",
    },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Date",
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Number of votes",
          },
        },
      ],
    },
  };
  const data = {
    labels: labels,
    maintainAspectRatio: false,
    datasets: [
      {
        label: "NEGATIVE",
        data: votes.map((vote) => vote.negative),
        fill: false,
        borderColor: "#FF0000",
        tension: 0.2,
      },
      {
        label: "NEUTRAL",
        data: votes.map((vote) => vote.neutral),
        fill: false,
        borderColor: "#36A2EB",
        tension: 0.2,
      },
      {
        label: "POSITIVE",
        data: votes.map((vote) => vote.positive),
        fill: false,
        borderColor: "#85ff5f",
        tension: 0.2,
      },
    ],
  };

  return (
    <div>
      <Line data={data} options={options} width={100} height={50} />
    </div>
  );
}
