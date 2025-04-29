import React, { forwardRef } from 'react'
import { useState, useEffect } from 'react';

const expense = forwardRef((props, ref) => {
    const [cards, setCards] = useState([]);

    const fetchData = async () => {
        let a = await fetch("src/components/app.json")
        let data = await a.json()
        setCards(data)
        console.log(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div ref={ref} className="justify-center m-10  w-[85vw] ml-[15vw]">
            <h1 className="text m-10 mt-30 font-extrabold text-4xl justify-self-center">Daily Expense</h1>

            <div className='flex flex-wrap gap-[3vw] mt-[20vh] w-[75vw] justify-center h-[130vh] scroll-hide overflow-y-scroll '>

                {cards.map((card) => (
                    <div key={card.date} className="list card relative text-lg w-[21vw] h-[60vh] items-center ">
                        <div className='list text-2xl font-bold justify-self-center px-10'>{card.date}</div>
                        <div className='list bg-gray-700 h-1 w-[80%] justify-self-center rounded-full mt-3 mb-5'></div>
                        <div className='flex flex-col gap-2 h-[30vh] overflow-y-scroll scroll-hide'>
                            <div className=" list flex justify-between my-2">
                                <div>{card.item}</div>
                                <div>{card.price}</div>
                            </div>
                            <div className="  list flex justify-between my-2 ">
                                <div>{card.item}</div>
                                <div>{card.price}</div>
                            </div>
                            <div className="list flex justify-between my-2 ">
                                <div>{card.item}</div>
                                <div>{card.price}</div>
                            </div>
                            <div className="list flex justify-between my-2 ">
                                <div>{card.item}</div>
                                <div>{card.price}</div>
                            </div>
                            <div className="list flex justify-between my-2 ">
                                <div>{card.item}</div>
                                <div>{card.price}</div>
                            </div>
                            <div className="list flex justify-between my-2 ">
                                <div>{card.item}</div>
                                <div>{card.price}</div>
                            </div>
                        </div>
                        <div className='list bg-gray-700 h-1 w-full rounded-full mt-3 mb-5'></div>
                        <div className='absolute font-extrabold text-2xl right-5'>{card.total}</div>
                    </div>
                ))}

            </div>
        </div>
    )
});
export default expense
