import moment from "moment";

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
import TemperatureApi from "../../ApiCalls/TemperatureApi";
import Chart from "../../components/chart/Chart";
import Main from "../../components/main/Main";
import Navbar from "../../components/navbar/Navbar";

const Temperature = () => {
  const data = TemperatureApi();
  const description = {
    title: "Temperature Graph",
    paragraph:
      "I valori sull'asse X rappresentano gli anni; i valori sull'asse Y rappresentano i valori di temperatura. L'obiettivo è quello di visualizzare la relazione fra il tempo e i valori di temperatura, in modo che si possa vedere come i valori di temperatura cambiano nel tempo. In questo modo, è possibile confrontare i valori di temperatura in diversi momenti nel tempo e fare previsioni sulle tendenze future. I dati station e land rappresentano i valori di temperatura misurati rispettivamente presso una stazione meteorologica e sulla terraferma. In questo modo, è possibile confrontare i valori di temperatura misurati in questi due ambienti diversi e vedere come variano nel tempo. Questo fornisce una visione più completa della temperatura della Terra, che include sia i dati raccolti presso le stazioni meteorologiche che quelli raccolti sulla terraferma.",
  };

  return (
    <div>
      <Main />
      <Navbar />
      <Chart description={description} />
      <ResponsiveContainer width="95%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="time"
            tickFormatter={(tickItem) => {
              if (moment(tickItem, "YYYY").isValid()) {
                return moment(tickItem, "YYYY").format("YYYY");
              }
              return tickItem;
            }}
            domain={["dataMin", "dataMax"]}
          />
          <YAxis type="number" domain={[-2, 2]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="station"
            stroke="#DF2021"
            dot={false}
          />
          <Line type="monotone" dataKey="land" stroke="#DF7F20" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Temperature;
