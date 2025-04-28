import React from 'react'
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const landingpage = () => {
  return (
    <div className=" bg-home h-screen w-full p-0 m-0 overflow-hidden">

      {/* Content can go here if you have any */}
      <div className="relative h-full w-full">

        <div className='flex flex-col gap-5 justify-center items-center h-full'>

          <Link to='/addexpenseform' className='expbtn w-3xs rounded-bl-2xl mr-40 rounded-tr-2xl flex justify-center items-center h-12 bg-gray-400 font-bold btn transition'>Add Expense</Link>

          <div className="flex  gap-1 orline">
            <div className='list bg-gray-700 h-1 w-[5vw] justify-self-center rounded-full mt-3 mb-5'></div>
            <h2 className='font-bold text-lg'>OR</h2>
            <div className='list bg-gray-700 h-1 w-[5vw] justify-self-center rounded-full mt-3 mb-5'></div>
          </div>

          <input type='number' placeholder='Add Monthly Budget' className="bdgtbtn no-arrows text-center text-black w-3xs rounded-br-2xl ml-40 rounded-tl-2xl flex justify-center items-center h-12 bg-gray-500 font-bold btn"/>
        </div>
        {/* //Add expense- form */}


        {/* SVG at the bottom */}
        <div className="absolute -bottom-15 w-full orline bg-wave h-[40%] opacity-99 z-0">

        </div>
      </div>
    </div >
  )
}

export default landingpage
