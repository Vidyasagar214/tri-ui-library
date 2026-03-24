import React from "react";
import "./Checkbox.css";

/**
 * Checkbox with label and optional description.
 * @param {boolean} checked - Controlled checked state
 * @param {function} onChange - (e) => void
 * @param {boolean} disabled
 * @param {string} label
 * @param {string} id - For linking label
 * @param {string} className
 */
function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  label,
  id: idProp,
  className = "",
  indeterminate,
  ...rest
}) {
  const id = idProp || `ui-checkbox-${React.useId().replace(/:/g, "")}`;
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = !!indeterminate;
    }
  }, [indeterminate]);

  const classNames = [
    "ui-checkbox-wrapper",
    disabled && "ui-checkbox-wrapper--disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames}>
      <label className="ui-checkbox-label" htmlFor={id}>
        <input
          ref={inputRef}
          id={id}
          type="checkbox"
          className="ui-checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          aria-checked={indeterminate ? "mixed" : checked}
          aria-disabled={disabled}
          {...rest}
        />
        <span className="ui-checkbox-box" aria-hidden="true" />
        {label && <span className="ui-checkbox-text">{label}</span>}
      </label>
    </div>
  );
}

export default Checkbox;
