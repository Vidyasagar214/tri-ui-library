import React, { useState, useEffect, useRef } from "react";
import "./DropdownMenu.css";

/**
 * Dropdown menu triggered by a button, with keyboard navigation.
 * @param {React.ReactNode} trigger - Button or element that opens the menu
 * @param {Array<{ label: string, onClick?: function, disabled?: boolean }>} items - Menu items
 * @param {string} align - 'start' | 'end'
 */
function DropdownMenu({ trigger, items = [], align = "end" }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

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
    if (item.disabled) return;
    item.onClick?.();
    setOpen(false);
  };

  const handleKeyDown = (e) => {
    if (!open) return;
    const focusable = containerRef.current?.querySelectorAll(".ui-dropdown-item");
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

  return (
    <div
      className="ui-dropdown"
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
        aria-controls="ui-dropdown-menu"
        tabIndex={0}
      >
        {trigger}
      </div>
      {open && (
        <ul
          id="ui-dropdown-menu"
          className={`ui-dropdown-menu ui-dropdown-menu--${align}`}
          role="menu"
        >
          {items.map((item, i) => (
            <li key={i} role="none">
              <button
                type="button"
                className="ui-dropdown-item"
                role="menuitem"
                disabled={item.disabled}
                onClick={() => handleItemClick(item)}
                tabIndex={0}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
