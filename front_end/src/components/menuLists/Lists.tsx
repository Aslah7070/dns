/* eslint-disable react-hooks/exhaustive-deps */


"use client"
import React, { useEffect } from 'react'
import { DialogDemo } from '../commons/Dialogue'
import { useMenuStore } from '@/lib/store/useMenuStore'

const Lists = () => {
// const [activeTab, setActiveTab] = useState<string | null>(null);

   const {menu,activeTab, setActiveTab,findMenu}= useMenuStore()
useEffect(()=>{
    const display=async()=>{
        await findMenu()
    }

    display()
},[])
  return (
    <div
    style={{
                backgroundImage: `url("/assets/menubg.svg")`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
            }}
            className="relative w-full h-[150px] md:h-[150px] lg:h-[150px] flex items-center justify-center text-center text-white"
    >
        
        <div className="flex gap-4">
  {menu.map((val) => (
    <button
      key={val._id}
      onClick={() => setActiveTab(val._id)}
      className={`px-6 py-2 rounded border transition-all duration-300
        ${activeTab === val._id 
          ? "bg-[#0796EF] text-white"
          : "bg-black border border-white text-transparent bg-clip-text bg-gradient-to-b from-white to-pink-400"}
      `}
    >
      {val.name}
    </button>
  ))}
</div>
        <DialogDemo/>
    </div>
  )
}

export default Lists
