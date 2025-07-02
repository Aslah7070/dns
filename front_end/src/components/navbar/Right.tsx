
"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci';
import { HiX } from 'react-icons/hi';

const Right = () => {
    
     const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className=' w-1/6 md:w-2/4 flex items-start justify-end md:items-end h-full  '>
      <div className="hidden md:flex container mx-auto items-center justify-end pt-2">
        <ul className="flex space-x-6 ml-auto text-white mr-5">
          <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link href="/menu" className="hover:text-blue-400">Menu</Link></li>
          <li><Link href="/reservation" className="hover:text-blue-400">Make a Reservation</Link></li>
          <li><Link href="/contact" className="hover:text-blue-400">Contact Us</Link></li>
        </ul>
      </div>
       
 <div className="md:hidden flex items-start  justify-end">
     
        <button
          className="text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <CiMenuBurger className='text-white' />}
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-2 space-y-1 text-center text-white bg-black py-2">
          <li><Link href="/" className="block py-1 hover:text-blue-400">Home</Link></li>
          <li><Link href="/menu" className="block py-1 hover:text-blue-400">Menu</Link></li>
          <li><Link href="/reservation" className="block py-1 hover:text-blue-400">Make a Reservation</Link></li>
          <li><Link href="/contact" className="block py-1 hover:text-blue-400">Contact Us</Link></li>
        </ul>
      )}
    </div>
  )
}

export default Right
