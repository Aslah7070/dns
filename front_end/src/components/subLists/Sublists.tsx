

"use client"
import Image from 'next/image'
import React from 'react'
import { DialogSublists } from '../commons/DialogueSublists'
import { useMenuStore } from '@/lib/store/useMenuStore'

const Sublists = () => {
    const { selectMenu } = useMenuStore()
    console.log("menusssssssss", selectMenu);


    return (


<div
  style={{
    backgroundImage: `url("/assets/sublistsbg.svg")`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  }}
  className="relative w-full min-h-[250px] md:min-h-[300px] lg:min-h-screen flex items-center justify-center text-white"
>
  <div className="border border-white w-[90%] max-w-7xl max-h-[90vh] overflow-y-auto scrollbar-hide relative px-4 py-6">
    {/* Header Row */}
    <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
      <div className="hidden md:block w-1/5" />

      {/* Title Section */}
      <div className="flex items-center justify-center flex-wrap text-center">
        <div className="h-px bg-gradient-to-r from-transparent to-white w-16 md:w-24 mr-4" />
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider">
          <span
            className="text-white"
            style={{
              textShadow: '2px 2px 0 #ec4899, 4px 4px 0 #ec4899',
            }}
          >
            {selectMenu?.[0]?.menuId?.name} Cocktails
          </span>
        </h2>
        <div className="h-px bg-gradient-to-l from-transparent to-white w-16 md:w-24 ml-4" />
      </div>

      {/* Button */}
      <div className="w-full md:w-1/5 flex justify-center md:justify-end">
        <DialogSublists />
      </div>
    </div>

    {/* Grid Items */}
    <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
      {selectMenu && selectMenu.length > 0 ? (
        selectMenu.map((item) => (
          <div key={item._id} className="group">
            <div className="flex items-baseline justify-between mb-2">
              <h3 className="text-lg md:text-xl font-bold uppercase text-white group-hover:text-pink-300 transition duration-300">
                {item.itemName}
              </h3>
              <div className="flex-1 mx-4 border-b border-dotted border-white/50 mb-1"></div>
              <span className="text-xl md:text-2xl font-bold text-pink-400">
                ${item.price}
              </span>
            </div>
            <p className="text-gray-300 text-start text-sm md:text-base leading-relaxed italic break-words">
              {item.description}
            </p>
          </div>
        ))
      ) : (
        <p className="text-center w-full text-gray-400 italic">No items available</p>
      )}
    </div>

    {/* Decorative Images */}
    <Image
      className="absolute bottom-0 right-0 w-20 h-auto"
      src="/assets/juce-1.svg"
      width={100}
      height={100}
      alt=""
    />
    <Image
      className="absolute top-0 left-0 w-20 h-auto"
      src="/assets/juce-3.svg"
      width={100}
      height={100}
      alt=""
    />
  </div>
</div>

    )
}

export default Sublists
