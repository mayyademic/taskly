import React from "react";

export default function FormInput({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  name,
}) {
  return (
    <label className="user-inputs">
      <p className="inputs-header">{label}</p>
      <input
        name={name}
        type={type}
        className="custom-input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </label>
  );
}
