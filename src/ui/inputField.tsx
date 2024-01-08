import { FC } from "react";
import "./styles/inputFieldStyles.css"
interface InputProps {
  type: string;
  placeholder: string;
  labelname: string;
}

const inputField: FC<InputProps> = ({type, placeholder, labelname}) => {
  return (
    <div className=" container">
      <label htmlFor="">{labelname}</label>
      <input type={type} name="" id="" placeholder={placeholder} aria-controls="False"/>
    </div>
  );
};

export default inputField;
