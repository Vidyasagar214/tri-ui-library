import React from "react";
import "./Empty.css";

function Empty({ title = "No data", description, icon, children, className = "" }) {
  const classNames = ["ui-empty", className].filter(Boolean).join(" ");
  return (
    <div className={classNames} role="status">
      {icon && <div className="ui-empty-icon">{icon}</div>}
      <h3 className="ui-empty-title">{title}</h3>
      {description && <p className="ui-empty-desc">{description}</p>}
      {children && <div className="ui-empty-actions">{children}</div>}
    </div>
  );
}

export default Empty;
