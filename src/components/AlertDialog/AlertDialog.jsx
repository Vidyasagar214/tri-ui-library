import React from "react";
import "./AlertDialog.css";

function AlertDialog({
  open,
  onClose,
  title,
  description,
  confirmLabel = "OK",
  cancelLabel = "Cancel",
  onConfirm,
  showCancel = true,
}) {
  if (!open) return null;
  return (
    <div className="ui-alertdialog-overlay" role="alertdialog" aria-modal="true" aria-labelledby="ui-alertdialog-title">
      <div className="ui-alertdialog">
        <h2 id="ui-alertdialog-title" className="ui-alertdialog-title">{title}</h2>
        {description && <p className="ui-alertdialog-desc">{description}</p>}
        <div className="ui-alertdialog-actions">
          {showCancel && (
            <button type="button" className="ui-alertdialog-btn ui-alertdialog-btn--secondary" onClick={onClose}>
              {cancelLabel}
            </button>
          )}
          <button type="button" className="ui-alertdialog-btn ui-alertdialog-btn--primary" onClick={() => { onConfirm?.(); onClose?.(); }}>
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AlertDialog;
