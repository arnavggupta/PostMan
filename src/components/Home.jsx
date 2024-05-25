import React, { useState } from 'react'
import Logo from './Logo'
import Header from './Header'
import Sswitcher from './Sswitcher'
import DataContext from '../context/Data'
import { useContext } from 'react'
import checkData from './utils'
import SnackBar from './SnackBar'
import { ApiHandling } from '../Services/ApiHandling'
export default function Home() {
  const {formData,param,header,bodyData} = useContext(DataContext);
const [errMsg,setErrMsg]= useState("");
const[err,setErr]= useState(false);
const[apiRes,setApiRes]= useState();
const [errRes,setErrRes]= useState(false);
const onSend = async () => {
  if (!checkData(formData, param, header, bodyData, setErrMsg)) {
    setErr(true);
    return false;
  }

  try {
    const response = await ApiHandling(formData, param, header, bodyData);
    console.log("API Response:", response.data);
    setErrRes(false);
    setApiRes(response.data);

  } catch (error) {
    console.log("API Call Failed:", error);
    setErrRes(true);
    // setErrMsg("Failed to call API");
    // setErr(true);
  }
}

  return (
    <div>
<Logo/>
<Header onSend={onSend}/>
<div className='flex justify-center'>
    <Sswitcher apiRes={apiRes} errRes={errRes} />

</div>

{err && <SnackBar err={err} setErr={setErr} errMsg={errMsg}/>}
    </div>
  )
}
