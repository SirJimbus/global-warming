import axios from "axios";
import { useState, useEffect } from "react";

export default function MethaneApi() {
  const [methaneData, setMethaneData] = useState([]);
  const url = "https://global-warming.org/api/methane-api";
  const getData = async () => {
    const response = await axios.get(url);
    setMethaneData(response.data.methane);
  };

  useEffect(() => {
    getData();
  }, []);

  return methaneData;
}
