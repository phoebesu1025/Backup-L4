import { useState } from "react";
function InputComponent({ val, handleChange }) {
  return (
    <div style={{ border: "10px dashed pink" }}>
      <label>
        <input value={val} type="text" onChange={handleChange} />
      </label>
    </div>
  );
}
export default InputComponent;
