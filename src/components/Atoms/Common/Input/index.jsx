import React from "react";

const Input = ({ type, name, value, placeholder, className }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default Input;
