import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Co2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://global-warming.org/api/co2-api");
      setData(result.data.co2);
    };
    fetchData();
  }, []);

  return (
    <LineChart
      width={900}
      height={500}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="cycle" stroke="#8884d8" />
      <Line type="monotone" dataKey="trend" stroke="#82ca9d" />
    </LineChart>
  );
};

export default Co2;
