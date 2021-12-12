import React from "react";
import SuperChild from "./SuperChild";

const Child = () => {
  return (
    <div>
      <h3> Child Component</h3>
      <SuperChild />
    </div>
  );
};

export default Child;
