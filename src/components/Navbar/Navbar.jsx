import React, { useState, useId } from "react";
import "./Navbar.css";

/**
 * Top application bar.
 * @param {React.ReactNode} brand - App name / text next to the logo
 * @param {React.ReactNode} logo - Custom logo (SVG, component, etc.) — takes precedence over logoSrc
 * @param {string} logoSrc - Image URL for the logo (renders <img class="ui-navbar-logo">)
 * @param {string} logoAlt - Alt text for logoSrc (accessibility)
 * @param {boolean} logoPlaceholder - When true and no logo/logoSrc, show a dashed placeholder box (same size as logo slot)
 * @param {boolean} brandMark - Gradient square when no logo, logoSrc, or placeholder
 */
function Navbar({
  brand,
  nav,
  actions,
  variant = "default",
  sticky = false,
  dense = false,
  brandMark = false,
  logo,
  logoSrc,
  logoAlt = "",
  logoPlaceholder = false,
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

  const hasLogo = logo != null && logo !== "" && logo !== false;
  const hasLogoImg = Boolean(logoSrc);
  const showPlaceholder = logoPlaceholder && !hasLogo && !hasLogoImg;
  const showGradientMark = brandMark && !hasLogo && !hasLogoImg && !showPlaceholder;

  const classNames = [
    "ui-navbar",
    `ui-navbar--${variant}`,
    sticky && "ui-navbar--sticky",
    dense && "ui-navbar--dense",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const brandClassNames = [
    "ui-navbar-brand",
    showGradientMark && "ui-navbar-brand--with-mark",
  ]
    .filter(Boolean)
    .join(" ");

  let logoEl = null;
  if (hasLogo) {
    logoEl = <span className="ui-navbar-logo-wrap">{logo}</span>;
  } else if (hasLogoImg) {
    logoEl = (
      <span className="ui-navbar-logo-wrap">
        <img className="ui-navbar-logo" src={logoSrc} alt={logoAlt} />
      </span>
    );
  } else if (showPlaceholder) {
    logoEl = (
      <span className="ui-navbar-logo-wrap" aria-hidden="true">
        <span className="ui-navbar-logo-placeholder" title="Add logo via logoSrc or logo prop" />
      </span>
    );
  }

  return (
    <header className={classNames} role="banner">
      <div className="ui-navbar-inner">
        <div className={brandClassNames}>
          {logoEl}
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
