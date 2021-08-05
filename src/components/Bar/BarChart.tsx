import React, { FC } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { IStoreCard, ItemsCrypto } from "../../types/interfaces";

const BarChart: FC = () => {
  
  const getGraphsItems:Array<ItemsCrypto> = useSelector((state: IStoreCard) => state.card.getGraphsItems);
  const pricePoint: number[] = [];
  const timePoint: string[] = [];

  getGraphsItems.forEach((element: { priceUsd: string | number; }) => {
    pricePoint.push((+element.priceUsd));
  });

  getGraphsItems.forEach((element: { date: string; }) => {
    timePoint.push((element.date));
  });
  
  const data = {
    labels: timePoint,
    backgroundColor: ['rgba(255,0,0,1)'],
    lineTension: 1,
    datasets: [
      {
        label: "priceHistory",
        fill: false,
        borderColor: "#1e53e5",
        borderWidth: 1,
        pointRadius: 2,
        data: pricePoint
      },
    ]
  };

  const options = {
    legend: {
      position: "right",
      labels: {
        boxWidth: 10
      }
    },
    scales: {
      xAxes: [
        {
          ticks: { display: false }
        }
      ]
    }
  };

  return (
    <>
      <Line data={data} options={options} />
    </>
  );
}

export { BarChart };