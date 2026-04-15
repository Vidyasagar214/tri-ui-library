import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./Calendar.css";

function startOfDay(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

function sameCalendarDay(a, b) {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
  );
}

function normalizeMonth(year, month) {
  const d = new Date(year, month, 1);
  return { year: d.getFullYear(), month: d.getMonth() };
}

function addMonths(year, month, delta) {
  return normalizeMonth(year, month + delta);
}

/** ISO 8601 week number (1–53) for the week containing `date` */
function getISOWeek(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
}

function inRange(d, minDate, maxDate) {
  const t = startOfDay(d).getTime();
  if (minDate && t < startOfDay(minDate).getTime()) return false;
  if (maxDate && t > startOfDay(maxDate).getTime()) return false;
  return true;
}

function buildCells(year, month, weekStartsOn) {
  const first = new Date(year, month, 1);
  const lead = (first.getDay() - weekStartsOn + 7) % 7;
  const dim = new Date(year, month + 1, 0).getDate();
  const cells = [];
  const start = new Date(year, month, 1 - lead);
  for (let i = 0; i < 42; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    cells.push({
      date: d,
      outside: d.getMonth() !== month,
    });
  }
  while (cells.length > 35 && cells.slice(-7).every((c) => c.outside)) {
    cells.splice(-7, 7);
  }
  return cells;
}

function chunkWeeks(cells) {
  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }
  return weeks;
}

/**
 * Month calendar with navigation, today highlight, optional min/max and disabled rules,
 * week start (Sunday or Monday), outside days, ISO week numbers, locale, and “Go to today”.
 */
function Calendar({
  value,
  onChange,
  className = "",
  minDate,
  maxDate,
  isDateDisabled,
  weekStartsOn = 0,
  showOutsideDays = true,
  showWeekNumbers = false,
  locale,
  showTodayButton = false,
}) {
  const classNames = ["ui-calendar", className].filter(Boolean).join(" ");
  const base = value ? startOfDay(value) : startOfDay(new Date());
  const [view, setView] = useState(() => ({ year: base.getFullYear(), month: base.getMonth() }));

  useEffect(() => {
    if (!value) return;
    const v = startOfDay(value);
    setView((cur) => {
      if (cur.year === v.getFullYear() && cur.month === v.getMonth()) return cur;
      return { year: v.getFullYear(), month: v.getMonth() };
    });
  }, [value]);

  const weekStarts = weekStartsOn === 1 ? 1 : 0;
  const cells = useMemo(
    () => buildCells(view.year, view.month, weekStarts),
    [view.year, view.month, weekStarts]
  );
  const weeks = useMemo(() => chunkWeeks(cells), [cells]);

  const monthLabel = useMemo(
    () => new Date(view.year, view.month).toLocaleString(locale || undefined, { month: "long", year: "numeric" }),
    [view.year, view.month, locale]
  );

  const weekdayLabels = useMemo(() => {
    const labels = [];
    const anchor = new Date(2024, 0, 1);
    for (let i = 0; i < 7; i++) {
      const targetDow = (weekStarts + i) % 7;
      const d = new Date(anchor);
      const add = (targetDow - d.getDay() + 7) % 7;
      d.setDate(1 + add);
      labels.push(d.toLocaleString(locale || undefined, { weekday: "short" }));
    }
    return labels;
  }, [locale, weekStarts]);

  const goPrev = useCallback(() => {
    setView((v) => addMonths(v.year, v.month, -1));
  }, []);

  const goNext = useCallback(() => {
    setView((v) => addMonths(v.year, v.month, 1));
  }, []);

  const goToday = useCallback(() => {
    const t = new Date();
    setView({ year: t.getFullYear(), month: t.getMonth() });
    onChange?.(startOfDay(t));
  }, [onChange]);

  const isDisabledDay = useCallback(
    (d) => {
      if (!inRange(d, minDate, maxDate)) return true;
      if (typeof isDateDisabled === "function" && isDateDisabled(d)) return true;
      return false;
    },
    [minDate, maxDate, isDateDisabled]
  );

  const selectDay = useCallback(
    (d) => {
      if (isDisabledDay(d)) return;
      onChange?.(startOfDay(d));
      if (d.getMonth() !== view.month || d.getFullYear() !== view.year) {
        setView({ year: d.getFullYear(), month: d.getMonth() });
      }
    },
    [onChange, isDisabledDay, view.month, view.year]
  );

  const today = startOfDay(new Date());
  const selected = value ? startOfDay(value) : null;

  return (
    <div className={classNames} role="application" aria-label="Calendar">
      <div className="ui-calendar-header">
        <button type="button" className="ui-calendar-nav-btn" onClick={goPrev} aria-label="Previous month">
          ←
        </button>
        <span className="ui-calendar-title">{monthLabel}</span>
        <button type="button" className="ui-calendar-nav-btn" onClick={goNext} aria-label="Next month">
          →
        </button>
      </div>
      {showTodayButton ? (
        <div className="ui-calendar-toolbar">
          <button type="button" className="ui-calendar-today-btn" onClick={goToday}>
            Today
          </button>
        </div>
      ) : null}
      <div
        className={["ui-calendar-grid", showWeekNumbers ? "ui-calendar-grid--weeks" : ""].filter(Boolean).join(" ")}
        role="grid"
        aria-readonly="true"
      >
        {showWeekNumbers ? (
          <div className="ui-calendar-weeknum-h" aria-hidden="true">
            Wk
          </div>
        ) : null}
        {weekdayLabels.map((label) => (
          <div key={label} className="ui-calendar-weekday" role="columnheader">
            {label}
          </div>
        ))}
        {weeks.map((week, wi) => (
          <React.Fragment key={wi}>
            {showWeekNumbers ? (
              <div className="ui-calendar-weeknum" aria-hidden="true">
                {getISOWeek(week[0].date)}
              </div>
            ) : null}
            {week.map((cell, di) => {
              const { date, outside } = cell;
              const isToday = sameCalendarDay(date, today);
              const isSelected = selected && sameCalendarDay(date, selected);
              const disabled = isDisabledDay(date);
              const hideOutside = outside && !showOutsideDays;

              if (hideOutside) {
                return (
                  <div
                    key={`${wi}-${di}`}
                    className="ui-calendar-day ui-calendar-day--empty"
                    role="gridcell"
                  />
                );
              }

              return (
                <button
                  key={`${wi}-${di}`}
                  type="button"
                  role="gridcell"
                  disabled={disabled}
                  className={[
                    "ui-calendar-day",
                    outside ? "ui-calendar-day--outside" : "",
                    isToday ? "ui-calendar-day--today" : "",
                    isSelected ? "ui-calendar-day--selected" : "",
                    disabled ? "ui-calendar-day--disabled" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => selectDay(date)}
                  aria-label={date.toLocaleDateString(locale || undefined, {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                  aria-selected={isSelected ? "true" : "false"}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
