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
import "./polar.css";

const Polar = () => {
  const polarData = PolarApi();
  return (
    <div className="polar">
      <p className="polar-title">Arctic Ice</p>
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
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="area" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      <p className="polar-paragraph">
        I valori sull'asse y del grafico rappresentano le quantità di ghiaccio
        presente nell'Artico, in termini di estensione (extent) e area, nel
        corso degli anni; questi rappresentano i chilometri quadrati di
        estensione del ghiaccio artico (in inglese "extent of Arctic ice")
        chilometri quadrati. Il grafico mostra come queste quantità stiano
        cambiando nel tempo e come siano diminuite negli ultimi anni,
        evidenziando l'impatto del cambiamento climatico sull'Artico.
      </p>
    </div>
  );
};

export default Polar;
