import React from "react";
import "./Card.css";

/**
 * Card container with optional header and footer.
 * @param {React.ReactNode} children
 * @param {string} title - Optional card title
 * @param {React.ReactNode} footer - Optional footer content
 * @param {string} className
 * @param {string} variant - 'elevated' | 'outlined' (default)
 */
function Card({ children, title, footer, className = "", variant = "outlined", ...rest }) {
  const classNames = ["ui-card", `ui-card--${variant}`, className].filter(Boolean).join(" ");

  return (
    <div className={classNames} {...rest}>
      {title && (
        <div className="ui-card-header">
          <h3 className="ui-card-title">{title}</h3>
        </div>
      )}
      <div className="ui-card-body">{children}</div>
      {footer && <div className="ui-card-footer">{footer}</div>}
    </div>
  );
}

export default Card;
