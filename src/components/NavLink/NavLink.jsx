import React from "react";
import "./NavLink.css";

/**
 * Navigation link for Navbar / Sidebar. Renders <a> when href is set, else <button>.
 * @param {string} href - If set, renders anchor
 * @param {function} onClick
 * @param {boolean} active
 * @param {boolean} disabled
 * @param {React.ReactNode} icon - Optional leading icon
 * @param {React.ReactNode} children
 * @param {string} className
 */
function NavLink({
  href,
  onClick,
  active = false,
  disabled = false,
  icon,
  children,
  className = "",
  ...rest
}) {
  const classNames = [
    "ui-navlink",
    active && "ui-navlink--active",
    disabled && "ui-navlink--disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && <span className="ui-navlink-icon" aria-hidden="true">{icon}</span>}
      <span className="ui-navlink-text">{children}</span>
    </>
  );

  if (href && !disabled) {
    return (
      <a
        href={href}
        className={classNames}
        onClick={onClick}
        aria-current={active ? "page" : undefined}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classNames}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-current={active ? "page" : undefined}
      {...rest}
    >
      {content}
    </button>
  );
}

export default NavLink;
