import React, { useState, useCallback } from "react";
import "./Tabs.css";

function Tabs({ items = [], defaultTabId, onTabChange, className = "" }) {
  const firstId = items[0]?.id;
  const [active, setActive] = useState(defaultTabId ?? firstId);

  const select = useCallback(
    (id) => {
      setActive(id);
      onTabChange?.(id);
    },
    [onTabChange]
  );

  const onKeyDown = (e, index) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const next = (index + 1) % items.length;
      select(items[next].id);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prev = (index - 1 + items.length) % items.length;
      select(items[prev].id);
    } else if (e.key === "Home") {
      e.preventDefault();
      select(items[0].id);
    } else if (e.key === "End") {
      e.preventDefault();
      select(items[items.length - 1].id);
    }
  };

  if (!items.length) return null;

  return (
    <div className={["ui-tabs", className].filter(Boolean).join(" ")}>
      <div className="ui-tabs-list" role="tablist" aria-orientation="horizontal">
        {items.map((tab, index) => {
          const selected = tab.id === active;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`ui-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`ui-tabpanel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              className={["ui-tabs-tab", selected && "ui-tabs-tab--active"].filter(Boolean).join(" ")}
              onClick={() => select(tab.id)}
              onKeyDown={(e) => onKeyDown(e, index)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {items.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`ui-tabpanel-${tab.id}`}
          aria-labelledby={`ui-tab-${tab.id}`}
          hidden={tab.id !== active}
          className="ui-tabs-panel"
          tabIndex={0}
        >
          {tab.panel}
        </div>
      ))}
    </div>
  );
}

export default Tabs;
