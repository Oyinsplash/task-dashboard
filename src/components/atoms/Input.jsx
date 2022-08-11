import React from "react";
import "./Style.css";
function Input({
  className,
  type,
  placeholder,
  icon,
  onFocus,
  name,
  value,
  onChange,
}) {
  const handleFocus = (e) => (e.target.type = onFocus);
  return (
    <div className={`input_wrapper ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        // onFocus={handleFocus}
        value={value}
        onChange={onChange}
      />
      <div>{icon}</div>
    </div>
  );
}

export default Input;
