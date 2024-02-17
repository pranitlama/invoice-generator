import React from "react";

export default function Inputfield({ label, name, value, onChange, type }) {
  return (
    <div className="input_field">
      <label htmlFor="date">{label}</label>
      <input
        type={type}
        name={name}
        id=""
        className="input"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
