import React from "react";
import "./AspectRatio.css";

function AspectRatio({ ratio = 16 / 9, children, className = "" }) {
  const classNames = ["ui-aspectratio", className].filter(Boolean).join(" ");
  return (
    <div className={classNames} style={{ aspectRatio: ratio }}>
      {children}
    </div>
  );
}

export default AspectRatio;
