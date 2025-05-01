import React, { forwardRef, useState } from 'react'
import { Link } from "react-router-dom";
import { useEffect } from 'react';
// import 'home.css'
import './home.css'


const Total = forwardRef((props, ref) => {
  const [year, setYear] = useState(null);

  const monthClick = () => {
    setYear(null);
  }

  const yearClick = () => {
    setYear('year');
  }

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
    <div ref={ref} className='justify-items-center m-10 w-[85vw] ml-[15vw]'>
      <h1 className="text m-10 mt-30 font-extrabold text-4xl justify-self-center">Total Expense</h1>

      <div className='total p-0 mt-auto w-[65vw] h-100 justify-self-center rounded-3xl relative '>
        <div className='rounded-3xl flex flex-col items-center justify-items-center bg-black h-100 w-[20vw] right-0 absolute '>
          <h1 className='text-3xl mt-20 font-bold text-white'>Your Savings!!</h1>
          <h1 className='text-4xl my-5 font-bold text-red-600'>Savings</h1>
          <Link to="/invest" className='h-12 px-5 py-5 my-5 rounded-full w-35 bg-gray-500 text-white flex items-center justify-center transition-all bg-amber-500 hover:bg-black hover:scale-75'>Invest Now!!</Link>
        </div>
        <div className='m-5 p-10'>
          <div className='toggle relative flex w-[20vw] items-center px-3 bg-black h-15 font-bold rounded-b-3xl'>

            <div
              className={`absolute top-0 h-15 w-[10vw] bg-amber-800 rounded-b-3xl transition-all duration-350 shadow-xl`}
              style={{ left: year ? '0' : '50%' }}
            />

            <div onClick={monthClick} className="absolute text-white right-0 w-[11vw] h-15 items-center flex justify-center rounded-b-3xl cursor-pointer">
              Monthly </div>
            <div onClick={yearClick} className="absolute text-white left-0 w-[11vw] h-15 flex justify-center items-center rounded-b-3xl cursor-pointer">
              Yearly </div>
          </div>
          {!year ? (
            cards.map((card) => (
              <ul className='w-3/5 h-fit my-5 text-2xl font-bold mx-5 rounded-3xl ' key={card.date}>
                <li className='flex justify-between my-2 list'>
                  <div>{card.item}</div>
                  <div>{card.price}</div>
                </li>
              </ul>
            )).concat(
              <><div className="list bg-gray-700 h-1 w-[55%] justify-self-center rounded-full mr-75 mt-3 mb-5"></div>
              <div className='absolute right-82 list' key="total">&{7357}</div></>
            )
          ) : (
            cards.map((card) => (
            <ul className='w-3/5 h-fit my-5 text-2xl font-bold mx-5 rounded-3xl ' key={card.date}>
              <li className='flex justify-between list'>
                  <div>{card.item}</div>
                  <div>{card.price}</div>
                </li>
              </ul>
            )).concat(
              <><div className="list bg-gray-700 h-1 w-[55%] justify-self-center rounded-full mr-75 mt-3 mb-5"></div>
              <div className='absolute right-82 list' key="total">7357/-</div></>
            )
          )}
        </div>
      </div>
    </div>
  );
})

export default Total
