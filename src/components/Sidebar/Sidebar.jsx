import React from "react";
import NavLink from "../NavLink";
import "./Sidebar.css";

/**
 * Vertical navigation rail for dashboards.
 * @param {Array<{ id?: string, label: React.ReactNode, icon?: React.ReactNode, href?: string, active?: boolean, disabled?: boolean, onClick?: function }>} items
 * @param {React.ReactNode} header - Top slot (app name / logo); shown on the same row as the collapse control when both are set
 * @param {React.ReactNode} footer - Bottom slot
 * @param {boolean} collapsed - Narrow rail (icons only if you hide labels in CSS)
 * @param {function} onToggleCollapse - Called when collapse button clicked
 * @param {boolean} showCollapseButton - Show built-in toggle (aligned to the right of the header row)
 * @param {'left'|'right'} position
 * @param {'default'|'accent'|'minimal'} variant
 * @param {'normal'|'wide'} width - Expanded width
 * @param {string} className
 */
function Sidebar({
  items = [],
  header,
  footer,
  collapsed = false,
  onToggleCollapse,
  showCollapseButton = true,
  position = "left",
  variant = "default",
  width = "normal",
  className = "",
}) {
  const classNames = [
    "ui-sidebar",
    `ui-sidebar--${variant}`,
    `ui-sidebar--${position}`,
    `ui-sidebar--width-${width}`,
    collapsed && "ui-sidebar--collapsed",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const showCollapse = Boolean(showCollapseButton && onToggleCollapse);
  const hasTopBar = Boolean(header || showCollapse);

  return (
    <aside className={classNames} aria-label="Sidebar navigation">
      {hasTopBar && (
        <div
          className={[
            "ui-sidebar-top",
            !header && showCollapse && "ui-sidebar-top--collapse-only",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {header ? <div className="ui-sidebar-header">{header}</div> : null}
          {showCollapse ? (
            <button
              type="button"
              className="ui-sidebar-collapse-btn"
              onClick={() => onToggleCollapse(!collapsed)}
              aria-expanded={!collapsed}
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <span className="ui-sidebar-collapse-icon" aria-hidden="true" />
            </button>
          ) : null}
        </div>
      )}
      <nav className="ui-sidebar-nav" aria-label="Sidebar">
        <ul className="ui-sidebar-list">
          {items.map((item, i) => (
            <li key={item.id ?? i} className="ui-sidebar-item">
              <NavLink
                href={item.href}
                onClick={item.onClick}
                active={item.active}
                disabled={item.disabled}
                icon={item.icon}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {footer && <div className="ui-sidebar-footer">{footer}</div>}
    </aside>
  );
}

export default Sidebar;
