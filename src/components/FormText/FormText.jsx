import React from "react";
import "./FormText.css";

/**
 * Muted helper copy associated with a field (use with `aria-describedby` on the control).
 * @param {'default'|'muted'} [tone]
 */
function FormText({ children, className = "", tone = "muted", id, as: Component = "p", ...rest }) {
  const classNames = ["ui-form-text", tone === "muted" && "ui-form-text--muted", className].filter(Boolean).join(" ");
  return (
    <Component id={id} className={classNames} {...rest}>
      {children}
    </Component>
  );
}

export default FormText;
