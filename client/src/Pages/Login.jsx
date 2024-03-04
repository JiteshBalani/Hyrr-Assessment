import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const saveUsername = (e) => {
        setUsername(e.target.value);
    }
    const savePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className='flex justify-around items-center pt-10'>

            <div className='flex flex-col space-y-2 border-2 rounded-md w-fit p-3 bg-white'>
                <label className='text-purple-500 text-2xl'>Username:</label>
                <input className='p-2 bg-transparent border-[1px] rounded-md px-5 pr-10'
                    type="text"
                    placeholder='Type your email'
                    value={username}
                    onChange={saveUsername} />

                <label className='text-purple-500 text-2xl'>Password:</label>
                <input className='p-2 bg-transparent border-[1px] rounded-md px-5 pr-10'
                    type="password"
                    placeholder='Type your password'
                    value={password}
                    onChange={savePassword} />

                {/* <div className='flex space-x-1 items-center'>
                    <input type='checkbox' />
                    <span className='text-blue-500'>Remember me</span>
                </div> */}
                <span className='font-semibold text-amber-800 italic cursor-pointer'>Forgot Password ?</span>
                <button className='rounded-md p-2 text-xl bg-purple-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full'>LOGIN</button>
                <button className='rounded-md p-2 text-xl text-black w-full flex items-center justify-center border-2 border-purple-500 space-x-2'>
                <GoogleIcon style={{backgroundColor:'lightgrey', borderRadius: 30, padding: 2, fontSize: 30}}/>
                <span>Signup with Google</span>
            </button>
                <Link to='/signup' className='text-center'><span className=' text-purple-500 cursor-pointer font-semibold'>New User? Register here</span></Link>
            </div>
        </div>
    )
}

export default Login