import React, { useState } from "react";
import "./HoverCard.css";

function HoverCard({ trigger, content, className = "" }) {
  const [open, setOpen] = useState(false);
  const classNames = ["ui-hovercard", className].filter(Boolean).join(" ");
  return (
    <div
      className={classNames}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="ui-hovercard-trigger">{trigger}</div>
      {open && <div className="ui-hovercard-content">{content}</div>}
    </div>
  );
}

export default HoverCard;
