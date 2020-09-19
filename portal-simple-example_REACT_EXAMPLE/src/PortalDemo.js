import React from "react";
import ReactDOM from "react-dom";

const PortalDemo = () => {
  return ReactDOM.createPortal(
    <div>THIS IS PORTAL </div>,
    document.getElementById("root-portal")
  );
};

export default PortalDemo;
