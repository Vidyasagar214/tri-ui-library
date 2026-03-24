import React from "react";
import "./Avatar.css";

function Avatar({ src, alt = "", fallback, size = "md", className = "" }) {
  const [loaded, setLoaded] = React.useState(false);
  const classNames = ["ui-avatar", `ui-avatar--${size}`, className].filter(Boolean).join(" ");
  return (
    <div className={classNames} role="img" aria-label={alt || undefined}>
      {src && (
        <img
          src={src}
          alt={alt}
          className="ui-avatar-img"
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(false)}
        />
      )}
      {(!src || !loaded) && <span className="ui-avatar-fallback">{fallback || (alt ? alt[0] : "?")}</span>}
    </div>
  );
}

export default Avatar;
