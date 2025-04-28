import React from 'react'
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const landingpage = () => {
  return (
    <div className=" bg-home h-screen w-full p-0 m-0 overflow-hidden">

      {/* Content can go here if you have any */}
      <div className="relative h-full w-full">

        <div className='flex gap-5 justify-center items-center h-full'>
          <motion.img
            src='src\assets\triangle.png' alt=''
            animate={{
              rotate: [0, 360],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />

          <motion.img
            src='src\assets\circle.png' alt=''
            animate={{
              rotate: [0, 360],
              y: [0, -50, 0],
            }}
            transition={{
              delay: 0.5,
              duration: 1.5,
              ease: "easeInOut",
            }}
          />

          <motion.img
            src='src\assets\square.png' alt=''
            animate={{
              rotate: [0, 360],
              y: [0, -50, 0],
            }}
            transition={{
              delay: 1,
              duration: 1.5,
              ease: "easeInOut",
            }}
          />

          <Link to='/addexpenseform' className='w-3xs rounded-bl-2xl rounded-tr-2xl flex justify-center items-center h-10 bg-amber-700 font-bold btn'>Add Expense</Link>
        </div>
        {/* //Add expense- form */}
       

        {/* SVG at the bottom */}
        <div className="absolute -bottom-15 w-full bg-wave h-[40%] opacity-99 z-0">

        </div>
      </div>
    </div>
  )
}

export default landingpage
