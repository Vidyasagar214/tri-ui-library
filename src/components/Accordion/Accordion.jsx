import React from "react";
import "./Accordion.css";

/**
 * Accordion - vertically stacked headings that reveal content.
 * @param {Array<{ title: React.ReactNode, content: React.ReactNode, disabled?: boolean }>} items
 * @param {boolean} multiple - If true, multiple panels can be open at once
 * @param {boolean} disabled - If true, all items are disabled
 * @param {string} variant - 'default' | 'borders' | 'card'
 * @param {string} className
 */
function Accordion({ items = [], multiple = false, disabled = false, variant = "default", className = "" }) {
  const [openState, setOpenState] = React.useState(multiple ? [] : null);

  const isOpen = (i) =>
    multiple ? Array.isArray(openState) && openState.includes(i) : openState === i;

  const toggle = (i) => {
    if (disabled) return;
    const item = items[i];
    if (item?.disabled) return;
    if (multiple) {
      setOpenState((prev) =>
        prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
      );
    } else {
      setOpenState((prev) => (prev === i ? null : i));
    }
  };

  const classNames = [
    "ui-accordion",
    `ui-accordion--${variant}`,
    disabled && "ui-accordion--disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} role="region" aria-label="Accordion">
      {items.map((item, i) => {
        const itemDisabled = disabled || item.disabled;
        return (
          <div key={i} className="ui-accordion-item">
            <button
              type="button"
              className="ui-accordion-trigger"
              onClick={() => toggle(i)}
              aria-expanded={isOpen(i)}
              aria-controls={`ui-accordion-panel-${i}`}
              aria-disabled={itemDisabled}
              id={`ui-accordion-trigger-${i}`}
              disabled={itemDisabled}
            >
              <span className="ui-accordion-trigger-text">{item.title}</span>
              <span className="ui-accordion-trigger-icon" aria-hidden="true" />
            </button>
            <div
              id={`ui-accordion-panel-${i}`}
              role="region"
              aria-labelledby={`ui-accordion-trigger-${i}`}
              className="ui-accordion-panel"
              hidden={!isOpen(i)}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
