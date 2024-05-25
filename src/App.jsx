import Home from "./components/Home"
import DataContext from "./context/Data"
import { useState } from "react"
function App() {
const [formData,setFormData]= useState({type:"POST",url:""});
const [param,setParam]= useState([]);
const[header,setHeader]= useState([]);
const [bodyData,setBodyData]= useState("");
  return (
    <>
    <DataContext.Provider value={{formData,setFormData,param,setParam,header,setHeader,bodyData,setBodyData}}>
      <Home/>
    </DataContext.Provider>
    </>
  )
}

export default App
