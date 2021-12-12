import React, { useContext } from "react";
import { globalInfo } from "./App";

const SuperChild = () => {
  const data = useContext(globalInfo);
  console.log(data);
  return (
    <div>
      <h3>SuperChild Component {data.data}</h3>
      <button
        onClick={(e) => {
          data.setData((data) => data + 1);
        }}
      >
        Count
      </button>
    </div>
  );
};

export default SuperChild;
