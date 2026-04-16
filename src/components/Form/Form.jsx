import React from "react";
import "./Form.css";

/** Semantic `<form>` with consistent vertical spacing for fields. */
function Form({ children, className = "", ...rest }) {
  return (
    <form className={["ui-form", className].filter(Boolean).join(" ")} noValidate {...rest}>
      {children}
    </form>
  );
}

export default Form;
