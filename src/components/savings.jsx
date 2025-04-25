import React, { forwardRef } from 'react'

const Savings = forwardRef((props, ref) => (
        <div ref={ref} >
                <h1 className="text m-10 mt-30 font-extrabold text-4xl justify-self-center">Savings</h1>
            <div className='total p-0 ml-[20vw] mt-auto w-[65vw] h-100 justify-self-center rounded-3xl relative bg-black/70'>
            </div>
        </div>
    )
);

export default Savings
