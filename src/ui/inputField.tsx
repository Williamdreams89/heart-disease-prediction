import React, { FC, useState } from "react";
import "./styles/inputFieldStyles.css";

interface InputProps {
  placeholder: string;
  labelname: string;
  name: string;
  onInputChange: (name: string, value: string) => void;
}

const InputField: FC<InputProps> = ({ placeholder, labelname, onInputChange, name }) => {
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
        type="number"
        name={name}  // Use the labelname as the name attribute for simplicity
        id=""
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        aria-controls="False"
        className=""
      />
    </div>
  );
};

export default InputField;
