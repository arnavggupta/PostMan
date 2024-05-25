import React from 'react'
import logo from '../assets/Postman.png';
export default function Logo() {
  return (
    <div>
        <img src={logo} className='w-16 ml-2 pt-2'  alt='logo' style={{cursor:"pointer"}}/>
    </div>
  )
}
