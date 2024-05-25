import React, { useState } from 'react';
import { TableCell, TableRow, Checkbox } from '@mui/material';

export default function AddRow({ addRows, rowId ,data,setData}) {
  const [checkbox, setCheckbox] = useState(false);

  const handleChange = (e) => {
    const newCheckboxValue = !checkbox;
    setCheckbox(newCheckboxValue);
    // let result=data.filter(entry=>entry.id===rowId)[0];
    const { name, value } = e.target;
    let updatedEntry = data.find(entry => entry.id === rowId);
    if (e.target.checked) {
      addRows((oldArr) => [...oldArr, rowId]);
      if (updatedEntry) {
        updatedEntry = { ...updatedEntry, check:true };
      } else {
        updatedEntry = { id:rowId,check:true};
      }
      // result={...data,check:true};
    }

    else{
      if (updatedEntry) {
        updatedEntry = { ...updatedEntry, check:false };
      } else {
        updatedEntry = { id:rowId,check:false};
      }

    }

    const index = data.findIndex(entry => entry.id === rowId);

    if (index === -1) {
      setData(oldData => [...oldData, updatedEntry]);
    } else {
      const newData = data.map((entry, i) => i === index ? updatedEntry : entry);
      setData(newData);
    }
  
  
//     else{
// result={...data,check:false};

//     }
//     let index= data.findIndex(entry=>entry.id===rowId);

// if(index===-1){
//   setData(oldArr=>[...oldArr,result]);
// }
// else{
// const newArr= Object.assign([...data],{
//   [index]:result
// })

// setData(newArr);
   
//   }
  // console.log(data);

};

const onTextChange = (e) => {
  const { name, value } = e.target;
  let updatedEntry = data.find(entry => entry.id === rowId);

  if (updatedEntry) {
    updatedEntry = { ...updatedEntry, [name]: value };
  } else {
    updatedEntry = { id: rowId, [name]: value };
  }

  const index = data.findIndex(entry => entry.id === rowId);

  if (index === -1) {
    setData(oldData => [...oldData, updatedEntry]);
  } else {
    const newData = data.map((entry, i) => i === index ? updatedEntry : entry);
    setData(newData);
  }

  console.log(data)
};

  return (
    <TableRow>
      <TableCell align="left">
        <Checkbox onChange={handleChange}  checked={checkbox}/>
      </TableCell>
      <TableCell align="left">
        <input type="text" style={{ border: '1px solid black', height: '30px', width: '500px' }} name='key'onChange={(e)=>{onTextChange(e)}} />
      </TableCell>
      <TableCell align="left">
        <input type="text"  style={{ border: '1px solid black', height: '30px', width: '500px' }} name='value' onChange={(e)=>{onTextChange(e)}} />
      </TableCell>
    </TableRow>
  );
}
