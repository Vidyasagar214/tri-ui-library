import React from "react";
import "./Badge.css";

function Badge({ children, variant = "default", className = "" }) {
  const classNames = ["ui-badge", `ui-badge--${variant}`, className].filter(Boolean).join(" ");
  return <span className={classNames}>{children}</span>;
}

export default Badge;
