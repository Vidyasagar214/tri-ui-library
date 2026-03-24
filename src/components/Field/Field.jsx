import React from "react";
import "./Field.css";

function Field({ label, error, hint, id, children, className = "" }) {
  const classNames = ["ui-field", className].filter(Boolean).join(" ");
  return (
    <div className={classNames}>
      {label && <label htmlFor={id} className="ui-field-label">{label}</label>}
      {children}
      {hint && <span className="ui-field-hint">{hint}</span>}
      {error && <span className="ui-field-error" role="alert">{error}</span>}
    </div>
  );
}

export default Field;
