import React from "react";
import "./Select.css";

/**
 * Styled native `<select>`. Pass `options={[{ value, label }]}` or `<option>` children.
 */
function Select({
  label,
  error,
  disabled = false,
  options = [],
  id: idProp,
  className = "",
  children,
  value,
  defaultValue,
  onChange,
  ...rest
}) {
  const id = idProp || `ui-select-${React.useId().replace(/:/g, "")}`;
  const errorId = error ? `${id}-error` : undefined;
  const classNames = [
    "ui-select",
    error && "ui-select--error",
    disabled && "ui-select--disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="ui-select-wrapper">
      {label ? (
        <label htmlFor={id} className="ui-select-label">
          {label}
        </label>
      ) : null}
      <select
        id={id}
        className={classNames}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={errorId}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        {...rest}
      >
        {options.map((opt) => (
          <option key={String(opt.value)} value={opt.value}>
            {opt.label}
          </option>
        ))}
        {children}
      </select>
      {error ? (
        <span id={errorId} className="ui-select-error" role="alert">
          {error}
        </span>
      ) : null}
    </div>
  );
}

export default Select;
