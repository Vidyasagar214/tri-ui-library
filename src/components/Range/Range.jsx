import React from "react";
import "./Range.css";

/**
 * Native range slider with Tri UI styling.
 */
function Range({
  label,
  error,
  disabled = false,
  id: idProp,
  className = "",
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue,
  onChange,
  showValue = false,
  ...rest
}) {
  const id = idProp || `ui-range-${React.useId().replace(/:/g, "")}`;
  const errorId = error ? `${id}-error` : undefined;
  const classNames = ["ui-range", error && "ui-range--error", disabled && "ui-range--disabled", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="ui-range-wrapper">
      {label ? (
        <div className="ui-range-label-row">
          <label htmlFor={id} className="ui-range-label">
            {label}
          </label>
          {showValue && value != null ? <span className="ui-range-value">{value}</span> : null}
        </div>
      ) : null}
      <input
        id={id}
        type="range"
        className={classNames}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={errorId}
        {...rest}
      />
      {error ? (
        <span id={errorId} className="ui-range-error" role="alert">
          {error}
        </span>
      ) : null}
    </div>
  );
}

export default Range;
