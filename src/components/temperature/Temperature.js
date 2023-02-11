import moment from "moment";
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import TemperatureApi from "../../ApiCalls/TemperatureApi";
import "./temperature.css";

const Temperature = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    TemperatureApi().then((response) => {
      setData(response.data.result);
    });
  }, []);

  return (
    <div className="temperature" id="temperature">
      <p className="temperature-title">Temperature Graph</p>
      <LineChart width={600} height={500} aspect={2} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="time"
          tickFormatter={(tickItem) => {
            if (moment(tickItem, "YYYY.MM").isValid()) {
              return moment(tickItem, "YYYY.MM").format("YYYY");
            }
            return tickItem;
          }}
          domain={["dataMin", "dataMax"]}
        />
        <YAxis type="number" domain={[-2, 2]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="station" stroke="#8884d8" />
        <Line type="monotone" dataKey="land" stroke="#82ca9d" />
      </LineChart>
      <p className="temperature-paragraph">
        I valori sull'asse X rappresentano gli anni; i valori sull'asse Y
        rappresentano i valori di temperatura. L'obiettivo è quello di
        visualizzare la relazione tra il tempo e i valori di temperatura, in
        modo che si possa vedere come i valori di temperatura cambiano nel
        tempo. In questo modo, è possibile confrontare i valori di temperatura
        in diversi momenti nel tempo e fare previsioni sulle tendenze future. I
        dati "station" e "land" rappresentano i valori di temperatura misurati
        rispettivamente presso una stazione meteorologica e sulla terraferma. In
        questo modo, è possibile confrontare i valori di temperatura misurati in
        questi due ambienti diversi e vedere come variano nel tempo. Questo
        fornisce una visione più completa della temperatura della Terra, che
        include sia i dati raccolti presso le stazioni meteorologiche che quelli
        raccolti sulla terraferma.
      </p>
    </div>
  );
};

export default Temperature;
