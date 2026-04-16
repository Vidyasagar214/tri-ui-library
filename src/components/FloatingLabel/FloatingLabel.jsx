import React from "react";
import "./FloatingLabel.css";

/**
 * Label that floats above the field when focused or filled (`placeholder=" "` is set internally).
 */
function FloatingLabel({
  label,
  error,
  type = "text",
  disabled = false,
  id: idProp,
  className = "",
  placeholder: _ignored,
  ...rest
}) {
  const id = idProp || `ui-fl-${React.useId().replace(/:/g, "")}`;
  const errorId = error ? `${id}-error` : undefined;
  const wrapClass = [
    "ui-floating-label",
    error && "ui-floating-label--error",
    disabled && "ui-floating-label--disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapClass}>
      <input
        id={id}
        type={type}
        className="ui-floating-label__input"
        placeholder=" "
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={errorId}
        {...rest}
      />
      <label htmlFor={id} className="ui-floating-label__text">
        {label}
      </label>
      {error ? (
        <span id={errorId} className="ui-floating-label__error" role="alert">
          {error}
        </span>
      ) : null}
    </div>
  );
}

export default FloatingLabel;
