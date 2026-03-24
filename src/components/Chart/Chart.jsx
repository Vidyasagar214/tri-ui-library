import React from "react";
import "./Chart.css";

function Chart({ data = [], type = "bar", className = "" }) {
  const classNames = ["ui-chart", `ui-chart--${type}`, className].filter(Boolean).join(" ");
  const max = Math.max(...data.map((d) => d.value), 1);
  return (
    <div className={classNames} role="img" aria-label="Chart">
      <div className="ui-chart-bars">
        {data.map((item, i) => (
          <div key={i} className="ui-chart-bar-wrap">
            <div
              className="ui-chart-bar"
              style={{ height: `${(item.value / max) * 100}%` }}
              title={item.label}
            />
            <span className="ui-chart-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chart;
