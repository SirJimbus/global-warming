import axios from "axios";

const TemperatureApi = () => {
  const url = "https://global-warming.org/api/temperature-api";

  return axios.get(url);
};

export default TemperatureApi;
