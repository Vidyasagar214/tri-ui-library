import React from "react";
import "./Alert.css";

/**
 * Alert component for feedback messages.
 * @param {string} type - 'success' | 'warning' | 'error' | 'info'
 * @param {React.ReactNode} children
 * @param {string} title - Optional title
 * @param {string} className
 * @param {boolean} dismissible - Show close button
 * @param {function} onDismiss - Called when dismissed
 */
function Alert({
  type = "info",
  children,
  title,
  className = "",
  dismissible = false,
  onDismiss,
  ...rest
}) {
  const [dismissed, setDismissed] = React.useState(false);

  const handleDismiss = () => {
    setDismissed(true);
    onDismiss?.();
  };

  const classNames = [
    "ui-alert",
    `ui-alert--${type}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (dismissed) return null;

  return (
    <div
      className={classNames}
      role="alert"
      aria-live="polite"
      {...rest}
    >
      <div className="ui-alert-content">
        {title && <div className="ui-alert-title">{title}</div>}
        <div className="ui-alert-message">{children}</div>
      </div>
      {dismissible && (
        <button
          type="button"
          className="ui-alert-dismiss"
          onClick={handleDismiss}
          aria-label="Dismiss alert"
        >
          ×
        </button>
      )}
    </div>
  );
}

export default Alert;
