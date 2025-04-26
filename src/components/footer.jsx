import React from 'react'
import '@flaticon/flaticon-uicons/css/all/all.css';


const footer = () => {
  return (
    <div className='bg-black/90 w-[98.8vw] mt-5 h-30 flex justify-around items-center'>  
      <div className='flex gap-5'>
      <i class="fi fi-brands-instagram ibg"></i>
      <i class="fi fi-brands-twitter-alt ibg"></i>
      <i class="fi fi-brands-whatsapp ibg"></i>
      </div>
      <div>
        <input type="text" placeholder='Write To Us..' className='w-lg px-4 h-10 flex bg-gray-300 rounded-full'/>
      </div>
      <div className='flex gap-5'>
      <i class="fi fi-brands-github ibg"></i>
      <i class="fi fi-brands-facebook ibg"></i>
      <i class="fi fi-brands-reddit ibg"></i>
      </div>
    </div>
  )
}

export default footer
