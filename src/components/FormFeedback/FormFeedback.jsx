import React from "react";
import "./FormFeedback.css";

/**
 * Validation or hint text below a control. Use `invalid` for errors (sets role="alert").
 */
function FormFeedback({ children, className = "", invalid = false, id, ...rest }) {
  const classNames = ["ui-form-feedback", invalid && "ui-form-feedback--invalid", className].filter(Boolean).join(" ");
  return (
    <div id={id} className={classNames} role={invalid ? "alert" : undefined} {...rest}>
      {children}
    </div>
  );
}

export default FormFeedback;
