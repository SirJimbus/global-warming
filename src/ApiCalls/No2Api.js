import { useState, useEffect } from "react";
import axios from "axios";

const No2Api = () => {
  const [no2Data, setNo2Data] = useState([]);
  const url = "https://global-warming.org/api/nitrous-oxide-api";
  const getData = async () => {
    const response = await axios.get(url);
    setNo2Data(response.data.nitrous);
  };

  useEffect(() => {
    getData();
  }, []);

  return no2Data;
};

export default No2Api;
