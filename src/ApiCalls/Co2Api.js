import axios from "axios";
import { useState, useEffect } from "react";

export default function Co2Api() {
  const [co2Data, setCo2Data] = useState([]);
  const url = "https://global-warming.org/api/co2-api";
  const getData = async () => {
    const response = await axios.get(url);
    setCo2Data(response.data.co2);
  };

  useEffect(() => {
    getData();
  }, []);

  return co2Data;
}
