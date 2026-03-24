import React from "react";
import "./ContextMenu.css";

function ContextMenu({ children, items = [], onOpenChange }) {
  const [open, setOpen] = React.useState(false);
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  const ref = React.useRef(null);

  React.useEffect(() => {
    const handle = (e) => {
      if (e.button === 2) {
        e.preventDefault();
        setPos({ x: e.clientX, y: e.clientY });
        setOpen(true);
        onOpenChange?.(true);
      }
    };
    const el = ref.current;
    el?.addEventListener("contextmenu", handle);
    return () => el?.removeEventListener("contextmenu", handle);
  }, [onOpenChange]);

  React.useEffect(() => {
    if (!open) return;
    const handle = () => {
      setOpen(false);
      onOpenChange?.(false);
    };
    document.addEventListener("click", handle);
    return () => document.removeEventListener("click", handle);
  }, [open, onOpenChange]);

  return (
    <div ref={ref} className="ui-contextmenu-wrapper">
      {children}
      {open && (
        <ul
          className="ui-contextmenu"
          style={{ left: pos.x, top: pos.y }}
          role="menu"
        >
          {items.map((item, i) => (
            <li key={i} role="none">
              <button type="button" className="ui-contextmenu-item" role="menuitem" onClick={item.onClick}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContextMenu;
