import React, { useState } from 'react'

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

                <button className='rounded-md p-2 text-xl bg-purple-500 w-full'>LOGIN</button>
            </div>
        </div>
    )
}

export default Login