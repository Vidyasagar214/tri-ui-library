import React from "react";
import "./Spinner.css";

function Spinner({ size = "md", className = "", label }) {
  return (
    <span
      className={["ui-spinner", `ui-spinner--${size}`, className].filter(Boolean).join(" ")}
      role={label ? "status" : "presentation"}
      aria-label={label || undefined}
    >
      <span className="ui-spinner-ring" aria-hidden />
    </span>
  );
}

export default Spinner;
