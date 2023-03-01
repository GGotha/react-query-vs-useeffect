import axios from "axios";

const api = async () => {
  console.log("--Request Start USING REACT QUERY--");
  const response = await axios.get("https://viacep.com.br/ws/72145429/json/");

  console.log("--Request End USING REACT QUERY--");
  return response.data;
};

export default api;
