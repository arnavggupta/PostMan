import React from 'react'

const checkValidJson = (data) => {
  if(data==="")return true; 
  try {
      JSON.parse(data);
      return true;
  } catch (error) {
      return false;
  }
};


export default function checkData(formData,param,header,bodyData,setErrMsg) {
 
  if(!formData.url){
    setErrMsg("Please Enter Valid Url")
    return false;

  }
    

  if(!checkValidJson(bodyData)){
    setErrMsg("Enter Valid JSON TEXT");
    return false;
  }
  return true;
}

export const headerandparam=(objArr)=>{

  let obj={};
  objArr.forEach(data=>{
    if(data.hasOwnProperty('check')&& data.check){
      obj={...obj,[data.key]:data.value}
    }
  })
return obj;
}
