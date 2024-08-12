import React from "react";

const Input = ({ isTextarea, label, ...props }) => {
  return (
    <p>
      <label>{label}</label>
      {isTextarea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
};

export default Input;
