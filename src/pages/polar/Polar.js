import React from "react";
import PolarApi from "../../ApiCalls/PolarApi";
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
import Main from "../../components/main/Main";
import Navbar from "../../components/navbar/Navbar";

const Polar = () => {
  const polarData = PolarApi();
  const description = {
    title: "Arctic Ice",
    paragraph: ` I valori sull'asse y del grafico rappresentano le quantità di ghiaccio
  presente nell'Artico, in termini di estensione (extent) e area, nel
  corso degli anni; questi rappresentano i chilometri quadrati di
  estensione del ghiaccio artico (in inglese "extent of Arctic ice")
  chilometri quadrati. Il grafico mostra come queste quantità stiano
  cambiando nel tempo e come siano diminuite negli ultimi anni,
  evidenziando l'impatto del cambiamento climatico sull'Artico.`,
  };
  return (
    <div>
      <Main />
      <Navbar />
      <Chart description={description} />
      <ResponsiveContainer width="95%" height={400}>
        <LineChart data={polarData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="extent"
            stroke="#47D4E6"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="area"
            stroke="#4785E6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Polar;
