import React, { useCallback, useMemo, useRef, useState } from "react";
import "./Chart.css";

/** Default SVG canvas — compact so the chart stays a normal inline size at full width. */
const VIEW_W = 280;
const VIEW_H = 120;
const MARGIN = { top: 8, right: 8, bottom: 26, left: 40 };

function defaultFormatValue(v) {
  if (typeof v === "number" && Number.isFinite(v)) return String(v);
  return String(v ?? "");
}

/**
 * SVG bar or line chart with grid, Y-axis ticks, and hover tooltips.
 * @param {{ label: string, value: number, hint?: string }[]} data
 * @param {'bar'|'line'} type
 * @param {(n: number) => string} [formatValue]
 * @param {number} [minValue=0] - Y-axis domain minimum (bars default 0)
 * @param {boolean} [showGrid=true]
 * @param {boolean} [showYAxis=true]
 * @param {number} [yTickCount=4]
 */
function Chart({
  data = [],
  type = "bar",
  className = "",
  formatValue = defaultFormatValue,
  minValue: minValueProp,
  showGrid = true,
  showYAxis = true,
  yTickCount = 4,
}) {
  const wrapRef = useRef(null);
  const [tip, setTip] = useState(null);

  const classNames = ["ui-chart", `ui-chart--${type}`, className].filter(Boolean).join(" ");

  const plotW = VIEW_W - MARGIN.left - MARGIN.right;
  const plotH = VIEW_H - MARGIN.top - MARGIN.bottom;

  const { maxV, minV, ticks, points, bars } = useMemo(() => {
    const values = data.map((d) => Number(d.value)).filter((n) => Number.isFinite(n));
    const rawMax = values.length ? Math.max(...values) : 1;
    const rawMin = values.length ? Math.min(...values) : 0;
    const minV =
      typeof minValueProp === "number" && Number.isFinite(minValueProp)
        ? minValueProp
        : type === "line"
          ? Math.min(rawMin, 0)
          : 0;
    const maxV = Math.max(rawMax, minV + 1e-6) * 1.02;
    const span = maxV - minV || 1;

    const tickCount = Math.max(2, Math.min(8, yTickCount));
    const ticks = [];
    for (let i = 0; i < tickCount; i++) {
      const t = minV + (span * i) / (tickCount - 1);
      ticks.push(t);
    }

    const n = data.length || 1;
    const slotW = plotW / n;

    const scaleY = (v) => MARGIN.top + plotH - ((Number(v) - minV) / span) * plotH;

    const points = data.map((d, i) => {
      const cx = MARGIN.left + slotW * i + slotW / 2;
      const cy = scaleY(d.value);
      return { x: cx, y: cy, i, d };
    });

    const bars = data.map((d, i) => {
      const cx = MARGIN.left + slotW * i + slotW / 2;
      const bw = Math.max(6, slotW * 0.52);
      const baseline = MARGIN.top + plotH;
      const yVal = scaleY(d.value);
      const yTop = Math.min(baseline, yVal);
      const yBot = Math.max(baseline, yVal);
      return { x: cx - bw / 2, w: bw, yTop, h: Math.max(yBot - yTop, 2), i, d };
    });

    return { maxV, minV, ticks, points, bars };
  }, [data, plotW, plotH, minValueProp, type, yTickCount]);

  const linePath = useMemo(() => {
    if (type !== "line" || !points.length) return "";
    return points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  }, [type, points]);

  const ariaLabel = useMemo(() => {
    if (!data.length) return "Empty chart";
    const parts = data.map((d) => `${d.label} ${formatValue(d.value)}`);
    return `${type} chart: ${parts.join(", ")}`;
  }, [data, formatValue, type]);

  const showTip = useCallback((e, i) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    setTip({ x, y, i });
  }, []);

  const moveTip = useCallback((e) => {
    setTip((prev) => {
      if (!prev) return prev;
      const el = wrapRef.current;
      if (!el) return prev;
      const r = el.getBoundingClientRect();
      return { ...prev, x: e.clientX - r.left, y: e.clientY - r.top };
    });
  }, []);

  const hideTip = useCallback(() => setTip(null), []);

  const tipContent = tip && data[tip.i] ? data[tip.i] : null;
  const tipHalf = 56;
  const tipStyle = tip
    ? (() => {
        const w = wrapRef.current?.offsetWidth ?? VIEW_W;
        const h = wrapRef.current?.offsetHeight ?? VIEW_H;
        const left = Math.min(Math.max(tip.x, tipHalf), Math.max(tipHalf, w - tipHalf));
        const top = Math.min(Math.max(tip.y, 24), h - 8);
        return { left, top };
      })()
    : undefined;

  if (!data.length) {
    return (
      <div className={classNames} role="img" aria-label="Empty chart">
        <p className="ui-chart-empty">No data</p>
      </div>
    );
  }

  return (
    <div className={classNames} role="img" aria-label={ariaLabel}>
      <div
        className="ui-chart-frame"
        ref={wrapRef}
        onMouseLeave={hideTip}
        onBlur={hideTip}
      >
        <svg
          className="ui-chart-svg"
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          {showGrid
            ? ticks.map((t, idx) => {
                const y = MARGIN.top + plotH - ((t - minV) / (maxV - minV || 1)) * plotH;
                return (
                  <line
                    key={`g-${idx}`}
                    className="ui-chart-gridline"
                    x1={MARGIN.left}
                    x2={VIEW_W - MARGIN.right}
                    y1={y}
                    y2={y}
                  />
                );
              })
            : null}

          {showYAxis
            ? ticks.map((t, idx) => {
                const y = MARGIN.top + plotH - ((t - minV) / (maxV - minV || 1)) * plotH;
                return (
                  <text
                    key={`y-${idx}`}
                    className="ui-chart-axis-y"
                    x={MARGIN.left - 8}
                    y={y + 4}
                    textAnchor="end"
                  >
                    {formatValue(t)}
                  </text>
                );
              })
            : null}

          <line
            className="ui-chart-axis-x"
            x1={MARGIN.left}
            x2={VIEW_W - MARGIN.right}
            y1={MARGIN.top + plotH}
            y2={MARGIN.top + plotH}
          />

          {data.map((d, i) => {
            const slotW = plotW / data.length;
            const cx = MARGIN.left + slotW * i + slotW / 2;
            return (
              <text key={`xl-${i}`} className="ui-chart-axis-x-label" x={cx} y={VIEW_H - 6} textAnchor="middle">
                {d.label}
              </text>
            );
          })}

          {type === "bar"
            ? bars.map((b) => (
                <g key={`b-${b.i}`}>
                  <rect
                    className="ui-chart-hit"
                    x={b.x}
                    y={b.yTop}
                    width={b.w}
                    height={b.h}
                    onMouseEnter={(e) => showTip(e, b.i)}
                    onMouseMove={moveTip}
                  />
                  <rect
                    className="ui-chart-bar-fill"
                    x={b.x}
                    y={b.yTop}
                    width={b.w}
                    height={b.h}
                    pointerEvents="none"
                  />
                </g>
              ))
            : null}

          {type === "line" ? (
            <>
              <path className="ui-chart-line-area" d={`${linePath} L ${points[points.length - 1]?.x} ${MARGIN.top + plotH} L ${points[0]?.x} ${MARGIN.top + plotH} Z`} />
              <path className="ui-chart-line-stroke" d={linePath} fill="none" pointerEvents="none" />
              {points.map((p) => (
                <circle
                  key={`hit-${p.i}`}
                  className="ui-chart-point-hit"
                  cx={p.x}
                  cy={p.y}
                  r={10}
                  onMouseEnter={(e) => showTip(e, p.i)}
                  onMouseMove={moveTip}
                />
              ))}
              {points.map((p) => (
                <circle
                  key={`dot-${p.i}`}
                  className="ui-chart-point-dot"
                  cx={p.x}
                  cy={p.y}
                  r={tip?.i === p.i ? 4 : 3}
                  pointerEvents="none"
                />
              ))}
            </>
          ) : null}
        </svg>

        {tipContent && tipStyle ? (
          <div
            className="ui-chart-tooltip"
            style={{
              left: tipStyle.left,
              top: tipStyle.top,
              transform: "translate(-50%, calc(-100% - 10px))",
            }}
            role="tooltip"
          >
            <span className="ui-chart-tooltip-label">{tipContent.label}</span>
            <span className="ui-chart-tooltip-value">{formatValue(tipContent.value)}</span>
            {tipContent.hint ? <span className="ui-chart-tooltip-hint">{tipContent.hint}</span> : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Chart;
