import React, { useEffect, useMemo, useState } from "react";
import "./Avatar.css";

function initialsFromAlt(alt) {
  const s = String(alt).trim();
  if (!s) return "?";
  const parts = s.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  const one = parts[0];
  if (one.length <= 1) return one.toUpperCase();
  return one.slice(0, 2).toUpperCase();
}

function fallbackText({ fallback, alt }) {
  if (fallback != null && String(fallback).trim()) return String(fallback).trim();
  if (alt && String(alt).trim()) return initialsFromAlt(alt);
  return "?";
}

/**
 * @param {string} [src] - Image URL; when set, shows loading placeholder then image or initials on error
 * @param {string} [alt]
 * @param {string} [fallback] - Initials or short text when there is no image or the image fails
 * @param {React.ReactNode} [placeholder] - Shown while `src` is loading (default: neutral skeleton)
 * @param {'xs'|'sm'|'md'|'lg'} [size]
 * @param {'circle'|'square'} [shape]
 * @param {boolean} [ring] - Subtle ring for stacking on images/headers
 * @param {'online'|'offline'|'busy'|'away'} [presence] - Corner availability dot
 */
function Avatar({
  src,
  alt = "",
  fallback,
  placeholder,
  size = "md",
  shape = "circle",
  ring = false,
  presence,
  className = "",
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!src) {
      setLoaded(false);
      setFailed(false);
      return;
    }
    setLoaded(false);
    setFailed(false);
  }, [src]);

  const text = useMemo(() => fallbackText({ fallback, alt }), [fallback, alt]);
  const ariaLabel = alt || text;
  const hasSrc = Boolean(src && String(src).trim());
  const showImage = hasSrc && !failed;
  const showPlaceholder = hasSrc && !failed && !loaded;
  const showFallback = !hasSrc || failed;

  const rootClass = ["ui-avatar-root", presence ? "ui-avatar-root--has-presence" : "", className]
    .filter(Boolean)
    .join(" ");

  const faceClass = [
    "ui-avatar",
    `ui-avatar--${size}`,
    `ui-avatar--${shape}`,
    ring ? "ui-avatar--ring" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={rootClass}>
      <span className={faceClass} role="img" aria-label={ariaLabel || undefined}>
        {showImage ? (
          <img
            key={src}
            src={src}
            alt={alt}
            className={`ui-avatar-img${loaded ? " ui-avatar-img--visible" : ""}`}
            onLoad={() => setLoaded(true)}
            onError={() => {
              setFailed(true);
              setLoaded(false);
            }}
            draggable={false}
          />
        ) : null}

        {showPlaceholder ? (
          <span className="ui-avatar-placeholder" aria-hidden>
            {placeholder != null ? (
              <span className="ui-avatar-placeholder-custom">{placeholder}</span>
            ) : (
              <span className="ui-avatar-skeleton" />
            )}
          </span>
        ) : null}

        {showFallback ? <span className="ui-avatar-fallback">{text}</span> : null}
      </span>

      {presence ? (
        <span className={`ui-avatar-presence ui-avatar-presence--${presence}`} aria-hidden title={presence} />
      ) : null}
    </span>
  );
}

export default Avatar;
