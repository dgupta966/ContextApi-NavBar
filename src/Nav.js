import React, { useContext } from "react";
import "./Nav.css";
import { globalInfo } from "./App";

const Nav = () => {
  const data = useContext(globalInfo);
  // console.log(data.data);
  return (
    <div className="wrapper">
      <div className="brand">Deepak Count {data.data}</div>
      <div className="navlink">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
