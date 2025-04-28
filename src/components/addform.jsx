import React from 'react'

const addform = () => {
    return (
        <div className='flex justify-center items-center h-screen w-full'>
            <form className='mt-5 p-5 rounded-2xl flex flex-col items-center justify-center h-3/4 w-1/2 bg-gray-800'>
                <div className='flex flex-col items-center justify-center h-full'>
                    <h1 className='text-3xl font-bold text-white'>Add Expense</h1>
                    <input type='file' placeholder='Upload Snap' className='w-3xs text-center rounded-full h-10 m-5 bg-amber-900 font-bold btn' />
                    <div className="flex items-center gap-1">
                        <div className='list bg-gray-700 h-1 w-[20vw] justify-self-center rounded-full mt-3 mb-5'></div>
                        <h3>OR</h3>
                        <div className='list bg-gray-700 h-1 w-[20vw] justify-self-center rounded-full mt-3 mb-5'></div>
                    </div>
                    <div className='flex flex-col gap-5 mt-5'>
                        <input type="text" placeholder='Item Name' className='w-3xs text-center rounded-full h-10 bg-gray-200 hover:bg-amber-100 font-bold' />
                        <input type="number" placeholder='Amount' className='centre text-center px-2 w-3xs rounded-full h-10 bg-gray-200 hover:bg-amber-100 font-bold ' />
                        <input type="date" placeholder='Date' className='centre w-3xs rounded-full h-10 bg-gray-200 hover:bg-amber-100 font-bold' />
                        <button className='w-3xs rounded-full h-10 bg-amber-900 font-bold btn'>Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default addform
