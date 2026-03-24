import React, { useState, useId } from "react";
import "./Navbar.css";

function Navbar({
  brand,
  nav,
  actions,
  variant = "default",
  sticky = false,
  dense = false,
  /** When true, shows a gradient mark before brand (text logos). Set false for custom image logos. */
  brandMark = false,
  mobileMenuOpen: controlledMobileOpen,
  onMobileMenuChange,
  className = "",
}) {
  const mobilePanelId = useId().replace(/:/g, "");
  const [internalMobileOpen, setInternalMobileOpen] = useState(false);
  const isControlled = controlledMobileOpen !== undefined;
  const mobileOpen = isControlled ? controlledMobileOpen : internalMobileOpen;

  const setMobileOpen = (open) => {
    if (!isControlled) setInternalMobileOpen(open);
    onMobileMenuChange?.(open);
  };

  const classNames = [
    "ui-navbar",
    `ui-navbar--${variant}`,
    sticky && "ui-navbar--sticky",
    dense && "ui-navbar--dense",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={classNames} role="banner">
      <div className="ui-navbar-inner">
        <div
          className={["ui-navbar-brand", brandMark && "ui-navbar-brand--with-mark"].filter(Boolean).join(" ")}
        >
          {brand}
        </div>
        <nav className="ui-navbar-nav" aria-label="Main">
          {nav}
        </nav>
        <div className="ui-navbar-actions">{actions}</div>
        <button
          type="button"
          className="ui-navbar-menu-toggle"
          aria-expanded={mobileOpen}
          aria-controls={`ui-navbar-mobile-${mobilePanelId}`}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="ui-navbar-menu-icon" aria-hidden="true" />
        </button>
      </div>
      <div
        id={`ui-navbar-mobile-${mobilePanelId}`}
        className="ui-navbar-mobile"
        hidden={!mobileOpen}
        role="navigation"
        aria-label="Mobile"
      >
        <div className="ui-navbar-mobile-inner">
          {nav}
          {actions && <div className="ui-navbar-mobile-actions">{actions}</div>}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
