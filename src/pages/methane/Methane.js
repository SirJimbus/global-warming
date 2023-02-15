import moment from "moment";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import MethaneApi from "../../ApiCalls/MethaneApi";
import "./methane.css";

function Methane() {
  const methaneData = MethaneApi();

  return (
    <div className="methane" id="methane">
      <p className="methane-title">Methane Graph</p>
      <ResponsiveContainer width="95%" height={400}>
        <LineChart width={800} height={500} data={methaneData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickFormatter={(tickItem) => {
              if (moment(tickItem, "YYYY.MM").isValid()) {
                return moment(tickItem, "YYYY.MM").format("YYYY");
              }
              return tickItem;
            }}
            domain={["dataMin", "dataMax"]}
          />
          <YAxis type="number" domain={[1600, 2000]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="average"
            stroke="#8884d8"
            dot={false}
          />
          <Line type="monotone" dataKey="trend" stroke="#82ca9d" dot={false} />
        </LineChart>
      </ResponsiveContainer>
      <p className="methane-paragraph">
        Sull'asse y del grafico si rappresenta la concentrazione media di metano
        nell'atmosfera in parti per miliardo (ppb). La concentrazione di metano
        è misurata in parti per miliardo perché rappresenta la quantità di
        molecole di metano presenti nell'atmosfera rispetto al totale di
        molecole di aria presente.
      </p>
    </div>
  );
}

export default Methane;
