import React, { FC, useState } from "react";
import "./styles/inputFieldStyles.css";
import { IconInfoCircle } from "@tabler/icons-react";

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
      <label htmlFor="" className=" flex">{labelname}<sup><IconInfoCircle size={'15px'} className="text-slate-500 cursor-pointer" style={{fontSize:".01px !important"}} /></sup></label>
      <input
        type="number"
        name={name}  
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
