import React, { useId } from "react";
import "./Progress.css";

function Progress({
  value = 0,
  max = 100,
  variant = "default",
  size = "md",
  striped = false,
  showLabel = false,
  className = "",
}) {
  const pct = max <= 0 ? 0 : Math.min(100, Math.max(0, (Number(value) / max) * 100));
  const uid = useId().replace(/:/g, "");
  const labelId = showLabel ? uid : undefined;

  return (
    <div
      className={["ui-progress", `ui-progress--${size}`, className].filter(Boolean).join(" ")}
      role="progressbar"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-labelledby={labelId}
    >
      {showLabel && (
        <div className="ui-progress-label" id={labelId}>
          {Math.round(pct)}%
        </div>
      )}
      <div className="ui-progress-track">
        <div
          className={[
            "ui-progress-bar",
            `ui-progress-bar--${variant}`,
            striped && "ui-progress-bar--striped",
          ]
            .filter(Boolean)
            .join(" ")}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default Progress;
