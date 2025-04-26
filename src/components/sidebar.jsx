import React from 'react'
import '@flaticon/flaticon-uicons/css/all/all.css';
import { useNavigate } from 'react-router-dom';


function Sidebar({ scrollToDExp, scrollToTotal, scrollToAnalysis, scrollToSavings }) {
   
    const navigate = useNavigate();

    const onInvestClick = () => {
        navigate('/invest');
    }

    const buttons = [
        { label: 'Daily Expense', icon: 'fi fi-rr-receipt', onClick: scrollToDExp },
        { label: 'Total', icon: 'fi fi-rr-dollar', onClick: scrollToTotal },
        { label: 'Analysis', icon: 'fi fi-rr-chart-pie-alt', onClick: scrollToAnalysis },
        { label: 'Savings', icon: 'fi fi-rr-piggy-bank', onClick: scrollToSavings },
        { label: 'Invest', icon: 'fi fi-br-growth-chart-invest', onClick: onInvestClick },
        { label: 'Logout', icon: 'fi fi-br-power', onClick: () => alert('Logout clicked') },
    ];

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
                <div className='mt-5 text-gray-500 flex flex-col items-start gap-3'>
                    {buttons.map((btn, index) => (
                        <button
                            key={index}
                            onClick={btn.onClick}
                            className="flex items-center text-gray-600 gap-3 btns px-3 py-2 rounded text-left transition duration-200"
                        >
                            <i className={`${btn.icon} text-xl`}></i>
                            <span>{btn.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default Sidebar
