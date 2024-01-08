import InputNumber from "./ui/inputField"
import { Grid, SimpleGrid } from "@mantine/core";
import './App.css';
import '@mantine/dropzone/styles.css';
import DropzoneCompo from "./ui/Dropzone"
function App() {
  return (
    <div className=" app_container flex  flex-col m-auto w-[90vw] lg:w-[60vw]">
    <h2 className=" sm:text-3xl text-5xl font-extrabold text-slate-700 mb-9 mt-12">Heart Disease Prediction</h2>
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
      <input type="submit" value="Predict Fields" className=" bg-black text-white p-4 rounded-md" />
    </form>
    <DropzoneCompo />
    <div className=" mb-10"></div>
    </div>
  );
}

export default App;