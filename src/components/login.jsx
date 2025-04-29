import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const login = () => {

     const [login, setLogin] = useState(null);
    
      const loginClick = () => {
        setLogin(null);
      }
    
      const signupClick = () => {
        setLogin('signup');
      }

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/');
    }

    return (
        <div className='bg w-screen h-screen flex justify-center items-center' >

{!login ? (
            <form action="" className='orline flex gap-5 justify-center items-center h-1/2 w-1/2 ml-20 rounded-3xl login'>
                <div className='flex flex-2/3 flex-col justify-center items-center '>
                    <h1 className='text-4xl font-bold text-black mb-10'>Login</h1>
                    <input type="text" placeholder='Username' className='text-center h-10 py-15 rounded-full bg-gray-300 w-80 text-black placeholder:text-gray-600 focus:outline-none text-lg mb-5' />
                    <input type="password" placeholder='Password' className='text-center h-10 py-4 rounded-full bg-gray-300 w-80 text-black placeholder:text-gray-600 focus:outline-none text-lg mb-5' />
                    <button onClick={handleLogin} type="submit" className='bg-blue-500 w-1/4 h-10 mb-5 text-white font-bold py-4 rounded-full hover:bg-blue-600 transition-all duration-300 text-lg'>Login</button>
                </div>
                <div className='relative flex flex-1/3 flex-col gap-5 justify-center items-center  w-[100%] h-[100%] rounded-3xl shadow-lg bg-black/90'>
                    <div className='text-white text-xl'>  Don't have <br /> an account?  </div>
                    <a onClick={signupClick} className='text-red-500 bg-gray-500 rounded-full flex justify-center items-center font-semibold h-10 w-25 cursor-pointer'>Sign Up</a>
                    

                </div>
            </form>
):(
            <form action="" className='orline flex gap-5 justify-center items-center h-[60%] w-1/2 ml-20 rounded-3xl login'>

                <div className='relative flex flex-1/3 flex-col gap-5 justify-center items-center  w-[100%] h-[100%] rounded-3xl shadow-lg bg-black/90'>
             
                    <div className='text-white text-xl'> Already have <br /> an account?  </div>
                    <a onClick={loginClick} className='text-red-500 bg-gray-500 rounded-full flex justify-center items-center font-semibold h-10 w-25 cursor-pointer'>Log In</a>
                   
                </div>

                <div className='flex flex-2/3 flex-col justify-center items-center '>
                    <h1 className='text-4xl font-bold text-black mb-3'>Sign Up</h1>
                    <input type="text" placeholder='Username' className='text-center h-10 py-15 rounded-full bg-gray-300 w-80 text-black placeholder:text-gray-600 focus:outline-none text-lg mb-5' />
                    <input type="text" placeholder='Gmail Address' className='text-center h-10 py-15 rounded-full bg-gray-300 w-80 text-black placeholder:text-gray-600 focus:outline-none text-lg mb-5' />
                    <input type="text" placeholder='Mobile Number' className='text-center h-10 py-15 rounded-full bg-gray-300 w-80 text-black placeholder:text-gray-600 focus:outline-none text-lg mb-5' />
                    <input type="password" placeholder='Password' className='text-center h-10 py-4 rounded-full bg-gray-300 w-80 text-black placeholder:text-gray-600 focus:outline-none text-lg mb-5' />
                    <button onClick={handleLogin} type="submit" className='bg-blue-500 w-1/2 h-10 mb-3 text-white font-bold py-4 rounded-full hover:bg-blue-600 transition-all duration-300 text-lg'>Create Account</button>
                </div>

            </form>
        )}
        </div>
    )
}

export default login
