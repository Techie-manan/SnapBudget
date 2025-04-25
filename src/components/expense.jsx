import React from 'react'

const expense = () => {
    return (
        <div className='flex flex-wrap gap-[3vw] ml-[20vw] mt-[20vh] w-[75vw] justify-center h-[160vh]'>
            <div className="list card relative text-lg w-[21vw] h-[60vh] items-center ">
                <div className='list text-2xl font-bold justify-self-center px-10'>Date</div>
                <div className='list bg-gray-700 h-1 w-[80%] justify-self-center rounded-full mt-3 mb-5'></div>
                <div className=" list flex justify-between my-2">
                    <div>items</div>
                    <div>price</div>
                </div>
                <div className="  list flex justify-between my-2 ">
                    <div>items</div>
                    <div>price</div>
                </div>
                <div className="list flex justify-between my-2 ">
                    <div>items</div>
                    <div>price</div>
                </div>
                <div className="list flex justify-between my-2 ">
                    <div>items</div>
                    <div>price</div>
                </div>
                <div className='list bg-gray-700 h-1 w-full rounded-full mt-3 mb-5'></div>
                <div className='absolute font-extrabold text-2xl right-5'>Total</div>
            </div>
            




        </div>
    )
}

export default expense
