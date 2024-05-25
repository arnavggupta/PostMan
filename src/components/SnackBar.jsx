// import { Snackbar } from "@mui/material";

// <Snackbar
//   open={open}
//   autoHideDuration={6000}
//   onClose={handleClose}
//   message="Note archived"
//   action={action}
// />

import React from 'react'
import { Snackbar } from '@mui/material'
export default function SnackBar({err,setErr,errMsg}) {

const handelClose=()=>{
    setErr(false);
}
  return (
    <div>
<Snackbar
  open={err}
  autoHideDuration={4000}
  onClose={handelClose}
  message={errMsg}
  
/>

    </div>
  )
}
