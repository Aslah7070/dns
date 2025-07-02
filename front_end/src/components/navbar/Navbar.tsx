import React from 'react'
import Left from './left'
import Right from './Right'

const Navbar = () => {
  return (
    <div className='flex items-center justify-evenly  bg-[#121618] h-20'>
      <Left/>
      <Right/>
    </div>
  )
}

export default Navbar
