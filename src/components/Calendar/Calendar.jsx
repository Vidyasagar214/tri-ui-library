import React from "react";
import "./Calendar.css";

function Calendar({ value, onChange, className = "" }) {
  const classNames = ["ui-calendar", className].filter(Boolean).join(" ");
  const d = value ? new Date(value) : new Date();
  const [view, setView] = React.useState({ year: d.getFullYear(), month: d.getMonth() });
  const daysInMonth = new Date(view.year, view.month + 1, 0).getDate();
  const firstDay = new Date(view.year, view.month, 1).getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDay }, () => null);
  const all = [...blanks, ...days];

  return (
    <div className={classNames} role="application" aria-label="Calendar">
      <div className="ui-calendar-header">
        <button type="button" onClick={() => setView((v) => ({ ...v, month: v.month - 1 }))}>←</button>
        <span>{new Date(view.year, view.month).toLocaleString("default", { month: "long", year: "numeric" })}</span>
        <button type="button" onClick={() => setView((v) => ({ ...v, month: v.month + 1 }))}>→</button>
      </div>
      <div className="ui-calendar-grid">
        {["Su","Mo","Tu","We","Th","Fr","Sa"].map((d) => <div key={d} className="ui-calendar-weekday">{d}</div>)}
        {all.map((day, i) => (
          day ? (
            <button
              key={i}
              type="button"
              className="ui-calendar-day"
              onClick={() => onChange?.(new Date(view.year, view.month, day))}
            >
              {day}
            </button>
          ) : (
            <div key={i} className="ui-calendar-day ui-calendar-day--empty" />
          )
        ))}
      </div>
    </div>
  );
}

export default Calendar;
