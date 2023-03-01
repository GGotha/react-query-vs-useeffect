import React, { useEffect, useState } from "react";
import api from "./api";
import "./index.css";

const UseEffectFetchdata: React.FC = () => {
  const [street, setStreet] = useState<string>("");

  const searchCep = async () => {
    const data = await api();

    setStreet(data.logradouro);
  };

  useEffect(() => {
    console.log("Component was built");

    searchCep();
  }, []);

  return (
    <div className="centralize">
      <h1>Street: {street}</h1>
    </div>
  );
};

export default UseEffectFetchdata;
