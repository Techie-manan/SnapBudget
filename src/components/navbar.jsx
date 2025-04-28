import React from 'react'
import { Link } from "react-router-dom";

const navbar = () => {
    return (
        <div className='navfade'>
            <div className='shadow w-[75vw] px-5 h-[13vh] z-10 flex justify-between items-center fixed rounded-b-3xl ml-[20vw] bg-black/70'>
                <div className='flex items-center ml-10'>
                    <img src="src\assets\logo_bgR.PNG" alt="logo:)"
                        className='h-30 opacity-100' />
                </div>

                <ul className="flex mr-10">
                    <Link to="/" className="line ml-[3vw] text-white">Home</Link>
                    <Link to="/about" className="line ml-[3vw] text-white">About</Link>
                    <Link to="/contact" className="line ml-[3vw] text-white">Contact</Link>
                </ul>

            </div>
        </div>
    )
}

export default navbar