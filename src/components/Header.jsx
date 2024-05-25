import React from 'react'
import {Select,MenuItem,Button} from "@mui/material"
import { blue } from '@mui/material/colors'
import { useState } from 'react'
import { useContext } from 'react'
import DataContext from '../context/Data'
export default function Header({onSend}) {

  const {formData,setFormData} = useContext(DataContext);
  console.log(formData);
    return (
    <>
    <div className='flex '>

<Select 
value={formData.type}
        //   labelId="demo-simple-select-label"
        //   id="demo-simple-select"
        // //   value={age}
          label="POST"
        //   onChange={handleChange}
       className='w-1/6 mt-3 text-sm mr-1'
       
       onChange={(e)=>{setFormData({...formData, type:e.target.value})}}
       >
          <MenuItem value={"GET"}>GET</MenuItem>
          <MenuItem value={"POST"}>POST</MenuItem>
          
        </Select>
        <input type='text' placeholder='Enter The URl' className='w-5/6 border-2 rounded-md text-sm mt-3 mr-1'  onChange={(e)=>{setFormData({...formData, url:e.target.value})}} />
        <Button variant="contained" style={{ backgroundColor: blue, color: 'white', height: 'fit-content',marginTop:"18px",marginRight:"4px"   }} onClick={onSend}>Send</Button>
    </div>
    </>
  ) 
}
