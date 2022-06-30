import React, { useState } from "react";
import "./styles.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import DashBoard from "./Components/DashBoard/DashBoard";

export default function App() {
  const [isValid, setValid] = useState(false);
  const [data, setData] = useState([]);
  const [prefix, setPrefix] = useState("");
  return (
    <>
      <Header isValid={isValid} setValid={setValid} setPrefix={setPrefix} />
      {!isValid ? (
        <Home
          data={data}
          setData={setData}
          isValid={isValid}
          setValid={setValid}
        />
      ) : (
        <DashBoard
          data={data}
          setData={setData}
          prefix={prefix}
          setPrefix={setPrefix}
        />
      )}
    </>
  );
}
