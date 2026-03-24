import React from "react";
import "./Button.css";

/**
 * Button component with variant, size, and icon support.
 * @param {string} variant - 'primary' | 'secondary' | 'danger' | 'ghost'
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {boolean} disabled
 * @param {function} onClick
 * @param {React.ReactNode} children - Button label
 * @param {React.ReactNode} leftIcon - Icon shown before the label
 * @param {React.ReactNode} rightIcon - Icon shown after the label
 * @param {string} type - 'button' | 'submit' | 'reset'
 * @param {string} className - Additional CSS classes
 * @param {string} ariaLabel - Accessible label when no visible text
 */
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  children,
  leftIcon,
  rightIcon,
  type = "button",
  className = "",
  ariaLabel,
  ...rest
}) {
  const hasLabel = children != null && children !== "";
  const classNames = [
    "ui-btn",
    `ui-btn--${variant}`,
    `ui-btn--${size}`,
    disabled && "ui-btn--disabled",
    leftIcon && "ui-btn--has-left-icon",
    rightIcon && "ui-btn--has-right-icon",
    (leftIcon || rightIcon) && !hasLabel && "ui-btn--icon-only",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      {...rest}
    >
      {leftIcon && <span className="ui-btn-icon ui-btn-icon--left" aria-hidden="true">{leftIcon}</span>}
      {hasLabel && <span className="ui-btn-label">{children}</span>}
      {rightIcon && <span className="ui-btn-icon ui-btn-icon--right" aria-hidden="true">{rightIcon}</span>}
    </button>
  );
}

export default Button;
