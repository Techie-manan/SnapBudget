import React, { forwardRef, useState } from 'react'
import { Link } from "react-router-dom";
// import 'home.css'
import './home.css'


const Savings = forwardRef((props, ref) => {
    const [year, setYear] = useState(null);

    const monthClick = () => {
        setYear(null);
    }

    const yearClick = () => {
        setYear('year');
    }
    return (
        <div ref={ref} className='justify-items-center m-10 w-[85vw] ml-[15vw]'>
            <h1 className="text m-10 mt-30 font-extrabold text-4xl justify-self-center">Savings!!</h1>

            <div className='total p-0 mt-auto w-[45vw] h-100 justify-self-center justify-center rounded-3xl relative bg-black/70'>

                <div className='m-5 p-10'>
                    <div className='toggle relative flex w-[20vw] items-center px-3 bg-black/70 h-15 font-bold rounded-b-3xl'>

                        <div
                            className={`absolute top-0 h-15 w-[10vw] bg-amber-500 rounded-b-3xl transition-all duration-350 shadow-xl`}
                            style={{ left: year ? '0' : '50%' }}
                        />

                        <div onClick={monthClick} className="absolute right-0 w-[11vw] h-15 items-center flex justify-center rounded-b-3xl cursor-pointer">
                            Monthly </div>
                        <div onClick={yearClick} className="absolute left-0 w-[11vw] h-15 flex justify-center items-center rounded-b-3xl cursor-pointer">
                            Yearly </div>
                    </div>
                    {!year ? (
                        <ul className='absolute w-3/5 right-1/6 h-fit my-5 text-2xl font-bold mx-5 rounded-3xl'>
                            <li className='flex justify-between my-2 list'>
                                <div>Week 1</div>
                                <div>345/-</div>
                            </li>
                            <li className='flex justify-between my-2 list'>
                                <div>Week 2</div>
                                <div>345/-</div>
                            </li>
                            <li className='flex justify-between my-2 list'>
                                <div>Week 3</div>
                                <div>345/-</div>
                            </li>
                            <li className='flex justify-between my-2 list'>
                                <div>Week 4</div>
                                <div>345/-</div>
                            </li>
                            <li className='flex justify-between my-2 list'>
                                <div>Week 5</div>
                                <div>345/-</div>
                            </li>
                            <div className='list bg-gray-700 h-1 w-[80%] justify-self-center rounded-full mt-3 mb-5'></div>
                            <li className='absolute right-1 list'>7357/-</li>
                        </ul>
                    ) : (
                        <ul className='absolute right-1/6 w-3/5 h-fit my-5 text-2xl font-bold mx-5 rounded-3xl'>
                            <li className='flex justify-between my-2 list'>
                                <div>January</div>
                                <div>950/-</div>
                            </li>
                            <li className='flex justify-between my-2 list'>
                                <div>Feburary</div>
                                <div>1020/-</div>
                            </li>
                            <li className='flex justify-between my-2 list'>
                                <div>March</div>
                                <div>2903/-</div>
                            </li>
                            <li className='flex justify-between my-2 list'>
                                <div>April</div>
                                <div>4536/-</div>
                            </li>
                            <li className='flex justify-between my-2 list'>
                                <div>May</div>
                                <div>1254/-</div>
                            </li>
                            <div className='list bg-gray-700 h-1 w-[80%] justify-self-center rounded-full mt-3 mb-5'></div>
                            <li className='absolute right-1 list'>92738/-</li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
})

export default Savings
