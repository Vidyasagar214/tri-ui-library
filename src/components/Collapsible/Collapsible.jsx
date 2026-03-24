import React from "react";
import "./Collapsible.css";

function Collapsible({ open: controlledOpen, defaultOpen = false, onOpenChange, trigger, children, className = "" }) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const setOpen = (v) => {
    if (!isControlled) setInternalOpen(v);
    onOpenChange?.(v);
  };

  const classNames = ["ui-collapsible", className].filter(Boolean).join(" ");
  return (
    <div className={classNames}>
      <button
        type="button"
        className="ui-collapsible-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {trigger}
      </button>
      <div className="ui-collapsible-content" hidden={!open}>
        {children}
      </div>
    </div>
  );
}

export default Collapsible;
