import moment from "moment";
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import MethaneApi from "../../ApiCalls/MethaneApi";
import "./methane.css";

function Methane() {
  const methaneData = MethaneApi();

  return (
    <div className="methane" id="methane">
      <p className="methane-title">Methane Graph</p>
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
        <YAxis type="number" domain={[1000, 2000]} />
        <Line type="monotone" dataKey="average" stroke="#8884d8" />
        <Line type="monotone" dataKey="trend" stroke="#82ca9d" />
      </LineChart>
      <p className="methane-paragraph">Paragraph</p>
    </div>
  );
}

export default Methane;
