import React, { useState } from "react";
import "./Combobox.css";

function Combobox({ options = [], value, onChange, placeholder = "Select...", className = "" }) {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const filtered = options.filter((o) => o.label.toLowerCase().includes(filter.toLowerCase()));
  const selected = options.find((o) => o.value === value);
  const classNames = ["ui-combobox", className].filter(Boolean).join(" ");

  return (
    <div className={classNames}>
      <div className="ui-combobox-input-wrap">
        <input
          type="text"
          className="ui-combobox-input"
          value={open ? filter : (selected?.label ?? "")}
          onChange={(e) => { setFilter(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          placeholder={placeholder}
          role="combobox"
          aria-expanded={open}
          aria-autocomplete="list"
        />
      </div>
      {open && (
        <ul className="ui-combobox-list" role="listbox">
          {filtered.map((opt) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={value === opt.value}
              className="ui-combobox-option"
              onMouseDown={() => { onChange?.(opt.value); setOpen(false); setFilter(""); }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Combobox;
