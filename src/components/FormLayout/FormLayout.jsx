import React from "react";
import "./FormLayout.css";

function FormLayout({ children, className = "" }) {
  return <div className={["ui-form-layout", className].filter(Boolean).join(" ")}>{children}</div>;
}

/** Responsive row: stacks on narrow viewports when `stack` is true (default). */
function FormLayoutRow({ children, className = "", columns = 2, stack = true }) {
  const mod =
    columns === 1 ? "ui-form-layout-row--1" : columns === 3 ? "ui-form-layout-row--3" : "ui-form-layout-row--2";
  const stackClass = stack ? "ui-form-layout-row--stack" : "";
  return (
    <div className={["ui-form-layout-row", mod, stackClass, className].filter(Boolean).join(" ")}>{children}</div>
  );
}

function FormLayoutCol({ children, className = "", span }) {
  const spanClass = span ? `ui-form-layout-col--span-${span}` : "";
  return <div className={["ui-form-layout-col", spanClass, className].filter(Boolean).join(" ")}>{children}</div>;
}

FormLayout.Row = FormLayoutRow;
FormLayout.Col = FormLayoutCol;

export default FormLayout;
