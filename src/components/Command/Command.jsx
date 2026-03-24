import React from "react";
import "./Command.css";

function Command({ children, placeholder = "Search...", className = "" }) {
  const classNames = ["ui-command", className].filter(Boolean).join(" ");
  return (
    <div className={classNames} role="command">
      <input type="text" className="ui-command-input" placeholder={placeholder} />
      <div className="ui-command-list">{children}</div>
    </div>
  );
}

export default Command;
