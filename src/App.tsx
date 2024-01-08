import InputNumber from "./ui/inputField"
import './App.css';
import '@mantine/dropzone/styles.css';
import DropzoneCompo from "./ui/Dropzone"
import { useState, FC, useEffect } from "react";
import { useModal } from "./contexts/ModalContext";
import { IconX } from "@tabler/icons-react";


const App = () => {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <div className=" app_container flex  flex-col m-auto w-[90vw] lg:w-[60vw] relative">
      {isOpen&&<div className=' w-[100vw] h-[100vh] bg-[rgba(255,255,255, 20%)] fixed z-[100] left-0 flex items-center justify-center' style={{backdropFilter: "blur(5px)"}}>
          <div className="modal-content w-[80%] md:w-[70%] rounded-lg lg:w-[40%] h-[370px] bg-white outline-1 fixed z-50" style={{border: "0.1px solid rgb(241, 234, 234)", boxShadow:"0px 10px 15px -3px rgba(0,0,0,0.1)"}}>
            <div className="relative">
            <IconX className=" text-slate-600 font-semibold absolute top-2 right-1 cursor-pointer" onClick={closeModal} />
            <h3 className=" font-bold absolute left-4 top-6" style={{letterSpacing:"2px"}}>What should my dataset look like?</h3>
            </div>

          </div>
      </div>}
    <h2 className=" w-full sm:text-3xl text-5xl font-extrabold text-slate-700 mb-9 mt-12 flex items-center justify-start gap-3"><img src="icon.png" width="50px" height="50px"/>Heart Disease Prediction</h2>
    <form className="flex justify-around items-center flex-col w-full">
    <div className=" form_entry w-full">
      <InputNumber type="number" placeholder="Number" labelname="Age" />
      <InputNumber type="number" placeholder="Category" labelname="Sex" />
      <InputNumber type="number" labelname="BP" placeholder="Number" />
      <InputNumber type="number" labelname="Cholesterol" placeholder="Number" />
      <InputNumber type="number" placeholder="Category" labelname="FBS over 120" />
      <InputNumber type="number" placeholder="Category" labelname="EKG results"/>
      <InputNumber type="number" placeholder="Category" labelname="Max HR" />
      <InputNumber type="number" placeholder="Category" labelname="Exercise angina" />
      <InputNumber type="number" placeholder="Number" labelname="ST depression" />
      <InputNumber type="number" placeholder="Number" labelname="Slope of ST" />
      <InputNumber type="number" placeholder="Category" labelname="Number of vessels fluro" />
      <InputNumber type="number" placeholder="Number" labelname="Thallium" />
    </div>
      <input type="submit" value="Predict Fields" className=" bg-black text-white mt-6 p-4 rounded-md w-[100%]" />
    </form>
    <DropzoneCompo />
    <div className=" mb-10"></div>
    </div>
  );
}

export default App