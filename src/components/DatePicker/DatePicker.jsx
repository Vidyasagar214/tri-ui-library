import React from "react";
import Calendar from "../Calendar";
import Input from "../Input";
import "./DatePicker.css";

function DatePicker({ value, onChange, placeholder = "Select date", className = "" }) {
  const [open, setOpen] = React.useState(false);
  const str = value ? new Date(value).toLocaleDateString() : "";
  const classNames = ["ui-datepicker", className].filter(Boolean).join(" ");

  return (
    <div className={classNames}>
      <Input
        readOnly
        value={str}
        placeholder={placeholder}
        onFocus={() => setOpen(true)}
        onClick={() => setOpen((v) => !v)}
      />
      {open && (
        <>
          <div className="ui-datepicker-overlay" onClick={() => setOpen(false)} aria-hidden="true" />
          <div className="ui-datepicker-dropdown">
            <Calendar value={value} onChange={(d) => { onChange?.(d); setOpen(false); }} />
          </div>
        </>
      )}
    </div>
  );
}

export default DatePicker;
