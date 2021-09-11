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
    datasets: [
      {
        label: "NEGATIVE",
        data: articles.map((article) => article.negative),
        fill: false,
        borderColor: "#FF0000",
        tension: 0.2,
      },
      {
        label: "NEUTRAL",
        data: articles.map((article) => article.neutral),
        fill: false,
        borderColor: "#36A2EB",
        tension: 0.2,
      },
      {
        label: "POSITIVE",
        data: articles.map((article) => article.positive),
        fill: false,
        borderColor: "#85ff5f",
        tension: 0.2,
      },
    ],
  };

  return (
    <div>
      <Line data={data} options={options} width={400} height={350} />
    </div>
  );
}
