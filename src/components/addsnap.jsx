import React from 'react'
import { motion } from 'framer-motion';

const addsnap = () => {
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
              duration: 2,
              ease: "easeInOut"
            }}
          />

          <motion.img
            src='src\assets\circle.png' alt=''
            animate={{
              rotate: [0, 360],
              y: [0, -50, 0],
            }}
            transition={{
              delay:1,
              duration: 2,
              ease: "easeInOut"
            }}
          />

          <motion.img
            src='src\assets\square.png' alt=''
            animate={{
              rotate: [0, 360],
              y: [0, -50, 0],
            }}
            transition={{
              delay: 2,
              duration: 2,
            
              ease: "easeInOut"
            }}
          />

          <button className=''>Add Expense</button>
        </div>
        {/* SVG at the bottom */}
        <div className="absolute -bottom-15 w-full bg-wave h-[40%] opacity-99 z-0">

        </div>
      </div>
    </div>
  )
}

export default addsnap
