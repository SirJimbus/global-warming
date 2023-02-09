import axios from "axios";
import { useState, useEffect } from "react";

export default function ClientApi() {
  const [co2Data, setCo2Data] = useState([]);
  const url = "https://global-warming.org/api/co2-api";

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(url);
      setCo2Data(response.data.co2);
    };
    getData();
  }, []);

  return co2Data;
}
