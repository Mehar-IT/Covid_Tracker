import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../api";
import { Line, Bar } from "react-chartjs-2";
import style from "./Chart.module.css";
// import { Legend } from "chart.js";

export default function Chart({
  data: { confirmed, recovered, deaths },
  country,
}) {
  const [dailyData, setDailyData] = useState([]);
  const data = async () => {
    const response = await fetchDailyData();
    setDailyData(response);
  };
  useEffect(() => {
    data();
  }, []);

  const line = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirm }) => confirm),
            label: "Infected",
            borderColor: "black",
            backgroundColor: "rgba(0, 0, 255, 0.5)",
            fill: true,
          },
          {
            data: dailyData.map(({ death }) => death),
            label: "Deaths",
            borderColor: "black",
            backgroundColor: "red",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  const bar = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;
  return <div className={style.chart}>{country ? bar : line}</div>;
}
