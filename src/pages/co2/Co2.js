import React from "react";
import Co2Api from "../../ApiCalls/Co2Api";
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
import Navbar from "../../components/navbar/Navbar";
import Main from "../../components/main/Main";

const co2 = () => {
  const co2Data = Co2Api();
  const description = {
    title: "Co2 levels Chart",
    paragraph: `L'asse Y indica la quantità di CO2 (misurata in parti per milione o ppm)
  nell'atmosfera. I numeri sull'asse Y rappresentano i valori specifici
  della quantità di CO2 in un momento specifico. Questi valori sono
  rappresentati come punti sulla linea del grafico, con la linea che
  collega questi punti che mostra la tendenza generale dei livelli di CO2
  nel tempo. Le linee di "cycle" e "trend" mostrano l'evoluzione delle
  concentrazioni di CO2 nel tempo, con "cycle" che mostra le fluttuazioni
  a breve termine e "trend" che mostra la tendenza di lungo termine.`,
  };

  return (
    <div>
      <Main />
      <Navbar />
      <Chart description={description} />
      <ResponsiveContainer width="95%" height={400}>
        <LineChart
          className="line-chart"
          width={800}
          height={500}
          data={co2Data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="year" />
          <YAxis type="number" domain={[380, 430]} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="cycle"
            stroke="#524449"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="trend"
            stroke="#44524D"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default co2;
