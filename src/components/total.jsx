import React from 'react'
// import 'home.css'
import './home.css'

const home = () => {
  return (
    <div className='total p-0 ml-[20vw] mt-auto w-[65vw] h-100 justify-self-center rounded-3xl relative bg-black/70'>
      <div className='rounded-3xl bg-amber-700/80 h-100 w-[20vw] right-0 absolute '></div>
      <div className='m-5 p-10'>
        <div className='relative flex w-[20vw] items-center px-3 bg-black/70 h-15 font-bold rounded-b-3xl'>
          <div className="absolute right-0 w-[11vw] h-15 items-center  bg-amber-500 rounded-b-3xl">
            <div className='justify-self-center align-middle'>Monthly</div>
          </div>
          <div>Yearly</div>
        </div>
        <ul className='w-3/5 h-full my-5 text-2xl font-bold mx-5 rounded-3xl'>
          <li className='flex justify-between my-2 '>
            <div>Week 1</div>
            <div>345/-</div>
          </li>
          <li className='flex justify-between my-2 '>
            <div>Week 2</div>
            <div>345/-</div>
          </li>
          <li className='flex justify-between my-2 '>
            <div>Week 3</div>
            <div>345/-</div>
          </li>
          <li className='flex justify-between my-2 '>
            <div>Week 4</div>
            <div>345/-</div>
          </li>
          <li className='flex justify-between my-2 '>
            <div>Week 5</div>
            <div>345/-</div>
          </li>
          <div className='list bg-gray-700 h-1 w-[80%] justify-self-center rounded-full mt-3 mb-5'></div>
          <li className='absolute right-82'>92738/-</li>
        </ul>

      </div>
    </div>
  )
}

export default home
