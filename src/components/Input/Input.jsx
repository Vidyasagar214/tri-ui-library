import React from "react";
import "./Input.css";

/**
 * Input component with label and error support.
 * @param {string} label - Optional label text
 * @param {string} error - Error message to display
 * @param {string} type - input type (text, email, password, etc.)
 * @param {string} placeholder
 * @param {boolean} disabled
 * @param {string} id - For linking label; auto-generated if not provided
 * @param {string} className
 * @param {object} ...rest - Passed to native input
 */
function Input({
  label,
  error,
  type = "text",
  placeholder,
  disabled = false,
  id: idProp,
  className = "",
  ...rest
}) {
  const id = idProp || `ui-input-${React.useId().replace(/:/g, "")}`;
  const errorId = error ? `${id}-error` : undefined;

  const classNames = [
    "ui-input",
    error && "ui-input--error",
    disabled && "ui-input--disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="ui-input-wrapper">
      {label && (
        <label htmlFor={id} className="ui-input-label">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={classNames}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={errorId}
        {...rest}
      />
      {error && (
        <span id={errorId} className="ui-input-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

export default Input;
