import React from 'react'

const sidebar = () => {
    return (
       
            <div className="shadow w-[15vw] fixed bg-black/70  h-120 rounded-br-2xl">
                <div className='ml-5 mt-10'>
                    <div className="flex gap-2 items-center mt-5 text-white text-xl font-bold">
                        <img src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=" alt="User"
                        className='rounded-full h-6' />
                        <h1 >Anant Singhal</h1>
                    </div>
                    <h3 className='text-gray-600 ml-7'>Gmail</h3>
                    <h3 className='text-gray-600 ml-7'>Number</h3>
                    <ul className='mt-5 text-gray-500 '>
                        <li className='btns'>Daily Expense</li>
                        <li className='btns'>Total</li>
                        <li className='btns'>Analysis</li>
                        <li className='btns'>Savings</li>
                    </ul>
                </div>
            </div>
    )
}

export default sidebar
