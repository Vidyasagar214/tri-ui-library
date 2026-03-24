import React from "react";
import "./InputGroup.css";

function InputGroup({ left, right, children, className = "" }) {
  const classNames = ["ui-inputgroup", className].filter(Boolean).join(" ");
  return (
    <div className={classNames}>
      {left && <span className="ui-inputgroup-addon ui-inputgroup-addon--left">{left}</span>}
      <span className="ui-inputgroup-input">{children}</span>
      {right && <span className="ui-inputgroup-addon ui-inputgroup-addon--right">{right}</span>}
    </div>
  );
}

export default InputGroup;
