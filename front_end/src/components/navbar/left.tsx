import Image from 'next/image'
import React from 'react'

const Left = () => {

  return (

     <nav className="relative w-1/4 md:w-2/4  text-white px-4 ">
      <div className="flex  items-center absolute  left-20 w-[200px] h-auto overflow-hidden z-30">
        <Image
          src="/assets/Logo.svg"
          alt="Half Logo"
          width={100}
          height={60}
          className="object-left object-cover"
        />

        
        
         <div className="hidden h-20  text-xl md:flex items-center justify-center">
  <h1 className="text-[#0796EF]">
    DEEP <span className="text-white">NET</span> <br />
    <span className="text-white">SOFT</span>
  </h1>
</div>
      </div>

    </nav>
  )
}

export default Left
