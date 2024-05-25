import React from 'react'
import { TextareaAutosize } from '@mui/material'
export default function Body({data,setData}) {
  const onValueChange=(e)=>{
    
    setData(e.target.value);
    console.log(data);
  }

  return (

 <>
    <div>
<TextareaAutosize style={{border:"2px solid black",width:"500px",marginTop:"20px"}} minRows={5} maxRows={10} onChange={(e)=>onValueChange(e)}/>

    </div>
    </>
  )
}
