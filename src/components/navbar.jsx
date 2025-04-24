import React from 'react'

const navbar = () => {
    return (
        <div>
            <div className='shadow w-[75vw] px-5 h-[13vh] flex justify-between items-center fixed rounded-b-3xl ml-[20vw] bg-black/70'>
                <div className='flex items-center ml-10'>
                    <img src="src\assets\logo_bgR.PNG" alt="logo:)" 
                    className='h-30 opacity-100'/>
                
                </div>

                <ul className="flex mr-10">
                    <li className="ml-[3vw] text-white">Home</li>
                    <li className="ml-[3vw] text-white">About</li>
                    <li className="ml-[3vw] text-white">Contact</li>
                </ul>

            </div>
        </div>
    )
}

export default navbar
