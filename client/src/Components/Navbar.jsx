import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='text-2xl shadow-sm shadow-purple-500 p-5 mb-20 flex items-center justify-between'>

            <Link to='/'><h1 className='text-purple-500 font-bold'>Hyrr <span className='sm:hidden'>Assignment</span></h1></Link>

            <div className='text-lg flex items-center space-x-2 text-gray-400 font-semibold'>

                <Link to='/'><div className='cursor-pointer'>Home</div></Link>
                <Link to='/signup'><div className='border-[1px] p-1 rounded-lg font-semibold bg-transparent cursor-pointer'>Register</div></Link>
                <Link to='/login'><div className='bg-white text-purple-500 p-1 font-semibold rounded-lg cursor-pointer'>Login</div></Link>

                <img src='https://cotton123236.github.io/CottonJS/dist/img/github-white.png' className='w-7 h-7'></img>
                <a href='https://github.com/JiteshBalani/Hyrr-Assessment' target='blank'><span>See the code↗</span></a>

            </div>

        </div>
    )
}

export default Navbar