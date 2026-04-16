import React from "react";
import "../Input/Input.css";
import "./Textarea.css";

/** Multi-line text control; matches Input labeling and error pattern. */
function Textarea({
  label,
  error,
  disabled = false,
  id: idProp,
  className = "",
  rows = 4,
  ...rest
}) {
  const id = idProp || `ui-textarea-${React.useId().replace(/:/g, "")}`;
  const errorId = error ? `${id}-error` : undefined;
  const classNames = [
    "ui-input",
    "ui-textarea",
    error && "ui-input--error",
    disabled && "ui-input--disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="ui-input-wrapper">
      {label ? (
        <label htmlFor={id} className="ui-input-label">
          {label}
        </label>
      ) : null}
      <textarea
        id={id}
        className={classNames}
        disabled={disabled}
        rows={rows}
        aria-invalid={!!error}
        aria-describedby={errorId}
        {...rest}
      />
      {error ? (
        <span id={errorId} className="ui-input-error" role="alert">
          {error}
        </span>
      ) : null}
    </div>
  );
}

export default Textarea;
