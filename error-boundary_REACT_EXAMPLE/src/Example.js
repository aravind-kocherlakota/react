import React from "react";

const Example = ({ name }) => {
  if (name === "Joker") {
    throw new Error("not a hero");
  } else {
    return <div>{name}</div>;
  }
};

export default Example;
