import React from "react";
import './Style.css'
function Input({ className, type, placeholder, icon, onFocus }) {
  const handleFocus = (e) => (e.target.type = onFocus);
  return (
    <div className={`input_wrapper ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        onFocus={handleFocus}
      />
      <div>{icon}</div>
    </div>
  );
}

export default Input;
