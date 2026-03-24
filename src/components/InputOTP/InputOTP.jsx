import React, { useRef } from "react";
import "./InputOTP.css";

function InputOTP({ length = 6, value = "", onChange, className = "" }) {
  const refs = useRef([]);
  const arr = value.split("").concat(Array(length).fill("")).slice(0, length);

  const handleChange = (i, v) => {
    const next = arr.slice();
    next[i] = v.replace(/\D/g, "").slice(-1);
    onChange?.(next.join(""));
    if (v && i < length - 1) refs.current[i + 1]?.focus();
  };

  const handleKeyDown = (i, e) => {
    if (e.key === "Backspace" && !arr[i] && i > 0) refs.current[i - 1]?.focus();
  };

  const classNames = ["ui-inputotp", className].filter(Boolean).join(" ");
  return (
    <div className={classNames} role="group" aria-label="One-time code">
      {arr.map((ch, i) => (
        <input
          key={i}
          ref={(el) => (refs.current[i] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          className="ui-inputotp-digit"
          value={ch}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          aria-label={`Digit ${i + 1}`}
        />
      ))}
    </div>
  );
}

export default InputOTP;
