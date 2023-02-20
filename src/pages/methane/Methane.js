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
  Legend,
} from "recharts";
import MethaneApi from "../../ApiCalls/MethaneApi";
import Chart from "../../components/chart/Chart";

function Methane() {
  const methaneData = MethaneApi();
  const description = {
    title: "Methane Graph",
    paragraph: `Sull'asse y del grafico si rappresenta la concentrazione media di metano
  nell'atmosfera in parti per miliardo (ppb). La concentrazione di metano
  è misurata in parti per miliardo perché rappresenta la quantità di
  molecole di metano presenti nell'atmosfera rispetto al totale di
  molecole di aria presente.`,
  };

  return (
    <div>
      <Chart description={description} />
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
          <Legend />
          <Line
            type="monotone"
            dataKey="average"
            stroke="#C4A484"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="trend"
            stroke="#84A4C4"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Methane;
