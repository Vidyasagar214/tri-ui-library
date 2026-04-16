import React, { createContext, useContext, useId, useMemo } from "react";
import "./Radio.css";

const RadioContext = createContext(null);

export function RadioGroup({ name: nameProp, value, onChange, label, children, className = "" }) {
  const uid = useId().replace(/:/g, "");
  const autoName = `ui-rg-${uid}`;
  const name = nameProp || autoName;
  const legendId = `ui-rg-legend-${uid}`;
  const ctx = useMemo(() => ({ name, value, onChange }), [name, value, onChange]);

  return (
    <RadioContext.Provider value={ctx}>
      <fieldset className={["ui-radio-group", className].filter(Boolean).join(" ")} aria-labelledby={label ? legendId : undefined}>
        {label ? (
          <legend id={legendId} className="ui-radio-group__legend">
            {label}
          </legend>
        ) : null}
        <div className="ui-radio-group__items">{children}</div>
      </fieldset>
    </RadioContext.Provider>
  );
}

export function Radio({ value, label, disabled = false, id: idProp, className = "" }) {
  const ctx = useContext(RadioContext);
  if (!ctx) {
    throw new Error("Radio must be used inside RadioGroup");
  }
  const rid = useId().replace(/:/g, "");
  const id = idProp || `${ctx.name}-opt-${value}-${rid}`;
  const checked = ctx.value === value;

  return (
    <div className={["ui-radio", disabled && "ui-radio--disabled", className].filter(Boolean).join(" ")}>
      <label className="ui-radio__label" htmlFor={id}>
        <input
          id={id}
          type="radio"
          className="ui-radio__input"
          name={ctx.name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={() => ctx.onChange?.(value)}
        />
        <span className="ui-radio__control" aria-hidden />
        {label ? <span className="ui-radio__text">{label}</span> : null}
      </label>
    </div>
  );
}
