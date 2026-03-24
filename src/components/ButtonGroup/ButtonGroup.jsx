import React from "react";
import "./ButtonGroup.css";

function ButtonGroup({ children, className = "" }) {
  const classNames = ["ui-buttongroup", className].filter(Boolean).join(" ");
  return <div className={classNames} role="group">{children}</div>;
}

export default ButtonGroup;
