import React from "react";
import { Line } from "react-chartjs-2";

export default function LineChart({ articles }) {
  const labels = articles.map((article) => article.date.slice(0, 10));
  const options = {
    title: {
      display: true,
      text: "Article Sentiment Predictions in the Past 20 Days",
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
            labelString: "Number of Articles",
          },
        },
      ],
    },
  };
  const data = {
    labels: labels,
    maintainAspectRatio: true,
    datasets: [
      {
        label: "NEGATIVE",
        data: articles.map((article) => article.negative),
        fill: false,
        borderColor: "rgba(255, 99, 132, 0.8)",
        tension: 0.2,
      },
      {
        label: "NEUTRAL",
        data: articles.map((article) => article.neutral),
        fill: false,
        borderColor: "rgba(255, 206, 86, 0.8)",
        tension: 0.2,
      },
      {
        label: "POSITIVE",
        data: articles.map((article) => article.positive),
        fill: false,
        borderColor: "rgba(54, 162, 235, 0.8)",
        tension: 0.2,
      },
    ],
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}
