import React from "react";
import No2Api from "../../ApiCalls/No2Api";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Chart from "../../components/chart/Chart";

const No2 = () => {
  const no2Data = No2Api();
  const description = {
    title: "No2 Chart",
    paragraph: `I valori sull'asse Y del grafico rappresentano la media globale di
  concentrazione di ossido di azoto (NO2) nell'atmosfera; la colonna
  "average" rappresenta la media mensile delle concentrazioni di NO2 in
  parti per miliardo (ppb), che sono state registrate in diverse parti del
  mondo.`,
  };
  const formatDate = (date) => {
    const year = new Date(date).getFullYear();
    return year;
  };

  return (
    <div>
      <Chart description={description} />
      <ResponsiveContainer width="95%" height={400}>
        <LineChart data={no2Data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tickFormatter={formatDate} />
          <YAxis type="number" domain={[310, 340]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="average"
            stroke="#8884d8"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="trend"
            stroke="#82ca9d"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default No2;
