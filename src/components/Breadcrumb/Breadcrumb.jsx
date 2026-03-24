import React from "react";
import "./Breadcrumb.css";

function Breadcrumb({ items = [], separator = "/", className = "" }) {
  const classNames = ["ui-breadcrumb", className].filter(Boolean).join(" ");
  return (
    <nav className={classNames} aria-label="Breadcrumb">
      <ol className="ui-breadcrumb-list">
        {items.map((item, i) => (
          <li key={i} className="ui-breadcrumb-item">
            {i > 0 && <span className="ui-breadcrumb-sep" aria-hidden="true">{separator}</span>}
            {item.href ? (
              <a href={item.href} className="ui-breadcrumb-link">{item.label}</a>
            ) : (
              <span className="ui-breadcrumb-current" aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
