import React, { useState, useEffect, useRef, useId } from "react";
import Button from "../Button";
import "./DropdownMenu.css";

/**
 * Dropdown menu triggered by a custom trigger or split primary + toggle.
 * Items may be actions, headers, or dividers: { label, onClick?, disabled?, active? } | { type: 'header', label } | { type: 'divider' }
 *
 * @param {React.ReactNode} trigger - Opens menu (ignored when split=true)
 * @param {Array} items - Menu entries
 * @param {'start'|'end'} align - Horizontal alignment (maps to placement)
 * @param {'bottom-start'|'bottom-end'|'top-start'|'top-end'} placement - Menu position (overrides infer from align if not default)
 * @param {'sm'|'md'|'lg'} size
 * @param {'default'|'dark'} variant
 * @param {boolean} split - Split button: primary action + caret menu
 * @param {string} primaryLabel - Left button label when split
 * @param {function} onPrimaryClick - Left button when split
 * @param {'sm'|'md'|'lg'} splitButtonSize - Button size for split controls
 */
function DropdownMenu({
  trigger,
  items = [],
  align = "end",
  placement: placementProp,
  size = "md",
  variant = "default",
  split = false,
  primaryLabel = "Action",
  onPrimaryClick,
  splitButtonSize = "md",
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const menuId = useId().replace(/:/g, "");

  const placement =
    placementProp ||
    (split ? "bottom-end" : align === "start" ? "bottom-start" : "bottom-end");

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleEscape = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  const handleItemClick = (item) => {
    if (item.disabled || item.type === "header" || item.type === "divider") return;
    item.onClick?.();
    setOpen(false);
  };

  const handleKeyDown = (e) => {
    if (!open) return;
    const focusable = containerRef.current?.querySelectorAll(".ui-dropdown-item:not(:disabled)");
    const list = focusable ? Array.from(focusable) : [];
    const current = document.activeElement;
    const idx = list.indexOf(current);
    if (e.key === "ArrowDown" && idx < list.length - 1) {
      e.preventDefault();
      list[idx + 1]?.focus();
    } else if (e.key === "ArrowUp" && idx > 0) {
      e.preventDefault();
      list[idx - 1]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      list[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      list[list.length - 1]?.focus();
    }
  };

  const menuClass = [
    "ui-dropdown-menu",
    `ui-dropdown-menu--${placement}`,
    `ui-dropdown-menu--size-${size}`,
    variant === "dark" && "ui-dropdown-menu--dark",
  ]
    .filter(Boolean)
    .join(" ");

  const renderItems = () =>
    items.map((item, i) => {
      if (item.type === "divider") {
        return (
          <li key={i} className="ui-dropdown-sep" role="separator" aria-orientation="horizontal" />
        );
      }
      if (item.type === "header") {
        return (
          <li key={i} className="ui-dropdown-header" role="presentation">
            {item.label}
          </li>
        );
      }
      return (
        <li key={i} role="none">
          <button
            type="button"
            className={["ui-dropdown-item", item.active && "ui-dropdown-item--active"].filter(Boolean).join(" ")}
            role="menuitem"
            disabled={item.disabled}
            onClick={() => handleItemClick(item)}
            tabIndex={0}
          >
            {item.label}
          </button>
        </li>
      );
    });

  const Chevron = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  if (split) {
    return (
      <div
        className={["ui-dropdown", "ui-dropdown--split", className].filter(Boolean).join(" ")}
        ref={containerRef}
        onKeyDown={handleKeyDown}
      >
        <Button variant="secondary" size={splitButtonSize} type="button" onClick={onPrimaryClick}>
          {primaryLabel}
        </Button>
        <button
          type="button"
          className={[
            "ui-dropdown-split-toggle",
            `ui-dropdown-split-toggle--${splitButtonSize}`,
          ].join(" ")}
          aria-haspopup="menu"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="ui-sr-only">Open menu</span>
          <Chevron />
        </button>
        {open && (
          <ul id={menuId} className={menuClass} role="menu">
            {renderItems()}
          </ul>
        )}
      </div>
    );
  }

  return (
    <div
      className={["ui-dropdown", className].filter(Boolean).join(" ")}
      ref={containerRef}
      onKeyDown={handleKeyDown}
    >
      <div
        className="ui-dropdown-trigger"
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((v) => !v);
          }
        }}
        role="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        tabIndex={0}
      >
        {trigger}
      </div>
      {open && (
        <ul id={menuId} className={menuClass} role="menu">
          {renderItems()}
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
