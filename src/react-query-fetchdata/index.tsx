import React, { useEffect } from "react";
import { useQuery } from "react-query";
import api from "./api";
import "./index.css";

const ReactQueryFetchData: React.FC = () => {
  const { data } = useQuery("cep", api);

  useEffect(() => {
    console.log("Component was built");
  }, []);

  return (
    <div className="centralize">
      <h1>Street: {data?.logradouro}</h1>
    </div>
  );
};

export default ReactQueryFetchData;
