import React from 'react'
import { motion } from 'framer-motion';

const addsnap = () => {
  return (
    <div className=" bg-home h-screen w-full p-0 m-0 overflow-hidden">
      <div className='flex justify-center items-center'>
        <motion.img
        src='' alt=''
         style={{        }}
         animate={{ }}
         transition={{}}
         />

        <motion.img
        src='' alt=''
         style={{        }}
         animate={{ }}
         transition={{}}
         />

        <motion.img
        src='' alt=''
         style={{        }}
         animate={{ }}
         transition={{}}
         />

      </div>


      {/* Content can go here if you have any */}
      <div className="relative h-full w-full">
        {/* SVG at the bottom */}
        <div className="absolute -bottom-15 w-full bg-wave h-[40%] opacity-99 z-0">

        </div>
      </div>
    </div>
  )
}

export default addsnap
