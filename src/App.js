import Child from "./Child";
import "./styles.css";
import React, { useState, createContext } from "react";
import Nav from "./Nav";

export const globalInfo = createContext();

export default function App() {
  const [data, setData] = useState(0);
  return (
    <div className="App">
      <globalInfo.Provider value={{ data: data, setData: setData }}>
        <Nav />
        <center>
          <h1>{data}</h1>
        </center>
        <Child />
        <h2>Context api</h2>
        <h5>Parent to child and child to Parent</h5>
        <h6>Simple NavBar</h6>
        <div style={{ color: "blue" }}>@deepakgupta</div>
      </globalInfo.Provider>
    </div>
  );
}
