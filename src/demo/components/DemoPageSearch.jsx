import React from "react";

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" width="1.05rem" height="1.05rem" fill="none" aria-hidden="true">
      <path
        d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 16l4.5 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Pill search field for demo list pages (home + examples).
 */
function DemoPageSearch({ id, value, onChange, placeholder, ariaLabel = "Search" }) {
  return (
    <div className="demo-page-search" role="search">
      <label htmlFor={id} className="demo-page-search-visually-hidden">
        {ariaLabel}
      </label>
      <span className="demo-page-search-icon">
        <SearchIcon />
      </span>
      <input
        id={id}
        type="search"
        inputMode="search"
        className="demo-page-search-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        spellCheck={false}
      />
    </div>
  );
}

export default DemoPageSearch;
