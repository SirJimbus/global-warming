import axios from "axios";
import { useState, useEffect } from "react";

export default function TemperatureApi() {
  const [temperatureData, setTemperatureData] = useState([]);
  const url = "https://global-warming.org/api/temperature-api";
  const getData = async () => {
    const response = await axios.get(url);
    setTemperatureData(response.data.result);
  };

  useEffect(() => {
    getData();
  }, []);

  return temperatureData;
}
