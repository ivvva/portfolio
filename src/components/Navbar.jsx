import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/logo.png'
import menu from '../assets/menu.png'

const Navbar = () => {
  return (
    <>
      <div className='w-full h-[120px] flex justify-between items-center p-20 bg-[#191427] text-gray-300'>
        <img src={logo} alt='logo icon' style={{ height: '110px' }} />
        <img src={menu} alt='menu icon' />
      </div>
    </>
  )
}

export default Navbar