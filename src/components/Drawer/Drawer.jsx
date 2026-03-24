import React, { useEffect } from "react";
import "./Drawer.css";

function Drawer({ open, onClose, title, children, side = "right", className = "" }) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <>
      <div className="ui-drawer-overlay" onClick={onClose} aria-hidden="true" />
      <div className={`ui-drawer ui-drawer--${side} ${className}`} role="dialog" aria-modal="true" aria-labelledby="ui-drawer-title">
        {title && <h2 id="ui-drawer-title" className="ui-drawer-title">{title}</h2>}
        <div className="ui-drawer-body">{children}</div>
        <button type="button" className="ui-drawer-close" onClick={onClose} aria-label="Close">×</button>
      </div>
    </>
  );
}

export default Drawer;
