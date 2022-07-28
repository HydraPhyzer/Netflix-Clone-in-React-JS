import React from 'react'
import "./Navbar.css"

const Navbar = (Props) => {
  return (
    <div className='Navbar'>
        <div className="Logo">
            <img src="/Logo/Written.png" alt="" />
        </div>
        <div className="Avatar">
            <img onClick={()=>{Props.Change(false)}} className='Sun' src="/Logo/Sun.png" alt="" />
            <img src="/Logo/Avatar.png" alt="" />
        </div>
    </div>
  )
}

export default Navbar