import React, { FC, useState } from "react";
import "./styles/inputFieldStyles.css";

interface InputProps {
  type: string;
  placeholder: string;
  labelname: string;
  onInputChange: (name: string, value: string) => void;
}

const InputField: FC<InputProps> = ({ type, placeholder, labelname, onInputChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setInputValue(value);
    onInputChange(name, value);
  };

  return (
    <div className="container">
      <label htmlFor="">{labelname}</label>
      <input
        type={type}
        name={labelname}  // Use the labelname as the name attribute for simplicity
        id=""
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        aria-controls="False"
      />
    </div>
  );
};

export default InputField;
