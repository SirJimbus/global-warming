import axios from "axios";
import { useState, useEffect } from "react";

export default function PolarApi() {
  const [polarData, setPolarData] = useState([]);
  const url = "https://global-warming.org/api/arctic-api";

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(url);
      setPolarData(response.data.arcticData);
    };
    getData();
  }, []);

  return polarData;
}
