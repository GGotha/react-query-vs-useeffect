import axios from "axios";

const api = async () => {
  console.log("--Request Start USING USEEFFECT--");
  const response = await axios.get("https://viacep.com.br/ws/72145429/json/");

  console.log("--Request End USING USEEFFECT--");
  return response.data;
};

export default api;
