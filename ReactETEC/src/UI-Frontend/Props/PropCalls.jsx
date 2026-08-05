import React from "react";

// Add curly braces { } around props to destructure them
const PropCalls = ({ name, skills }) => {
  return (
    <div>
      <p className="">My name is {name}</p>
      <p className="">Skills in {skills}</p>
    </div>
  );
};

export default PropCalls;