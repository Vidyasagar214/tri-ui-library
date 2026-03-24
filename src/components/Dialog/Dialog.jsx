import React, { useEffect } from "react";
import "./Dialog.css";

/**
 * Modal dialog with overlay, title, and optional actions.
 * @param {boolean} open - Controlled open state
 * @param {function} onClose - Called when overlay/close is clicked or Escape
 * @param {string} title - Dialog title
 * @param {React.ReactNode} children - Body content
 * @param {React.ReactNode} footer - Optional footer (e.g. buttons)
 * @param {string} className
 */
function Dialog({ open, onClose, title, children, footer, className = "" }) {
  const dialogRef = React.useRef(null);

  useEffect(() => {
    if (!open) return;
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose?.();
  };

  if (!open) return null;

  return (
    <div
      className="ui-dialog-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "ui-dialog-title" : undefined}
      onClick={handleOverlayClick}
    >
      <div
        ref={dialogRef}
        className={`ui-dialog ${className}`}
        role="document"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="ui-dialog-content">
          {title && (
            <h2 id="ui-dialog-title" className="ui-dialog-title">
              {title}
            </h2>
          )}
          <div className="ui-dialog-body">{children}</div>
          {footer && <div className="ui-dialog-footer">{footer}</div>}
        </div>
        <button
          type="button"
          className="ui-dialog-close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default Dialog;
