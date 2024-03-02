import React from 'react'
import { useState } from 'react'

const InputForm = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const saveUsername = (e) => {
        setUsername(e.target.value);
    }
    const savePassword = (e) => {
        setPassword(e.target.value);
    }
    const saveName = (e) => {
        setName(e.target.value);
    }

    return (
        <div className='flex flex-col justify-center items-center space-y-2 border-2 rounded-md w-fit p-3'>
            <h1>Sign Up</h1>
            <div className='flex space-x-2'>
                <label className='text-purple-500 text-2xl'>Username:</label>
                <input className='p-2 bg-transparent border-[1px] rounded-md'
                    type="text"
                    placeholder='Type your email'
                    value={username}
                    onChange={saveUsername} />
            </div>
            <div className='flex space-x-2 '>
                <label className='text-purple-500 text-2xl'>Password:</label>
                <input className='p-2 bg-transparent border-[1px] rounded-md'
                    type="password"
                    placeholder='Set a strong password'
                    value={password}
                    onChange={savePassword} />
            </div>
            <div className='flex space-x-2 '>
                <label className='text-purple-500 text-2xl'>Name:</label>
                <input className='p-2 bg-transparent border-[1px] rounded-md'
                    type="text"
                    placeholder='Firstname Lastname'
                    value={name}
                    onChange={saveName} />
            </div>
            <div className='flex space-x-1'>
                <input type='checkbox'/>
                <span>I accept all the <a className='text-blue-400'>Terms and Conditions</a></span>
            </div>

            <button className='m-2 rounded-md p-2 text-xl bg-purple-500'>Submit</button>
        </div>
    )
}

export default InputForm