import React from "react";
import ClientApi from "./ClientApi";
import "./co2.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const co2 = () => {
  const co2Data = ClientApi();

  return (
    <div>
      <LineChart
        width={500}
        height={300}
        data={co2Data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="year" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="cycle"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="trend" stroke="#82ca9d" />
      </LineChart>
      <p className="co2-paragraph">
        L'asse Y indica la quantità di CO2 (misurata in parti per milione o ppm)
        nell'atmosfera. I numeri sull'asse Y rappresentano i valori specifici
        della quantità di CO2 in un momento specifico. Questi valori sono spesso
        rappresentati come punti sulla linea del grafico, con la linea che
        collega questi punti che mostra la tendenza generale dei livelli di CO2
        nel tempo.
      </p>
    </div>
  );
};

export default co2;
