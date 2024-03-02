import React from 'react'
import { useState } from 'react'

const InputForm = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePicture, setProfilePicture] = useState(null);

    const saveUsername = (e) => {
        setUsername(e.target.value);
    }
    const savePassword = (e) => {
        setPassword(e.target.value);
    }
    const saveName = (e) => {
        setName(e.target.value);
    }
    const saveProfilePicture = (e) => {
        const selectedImage = e.target.files[0];
        setProfilePicture(selectedImage);
    }

    return (
        <div className='flex flex-col space-y-2 border-2 rounded-md w-fit p-3 bg-white'>
            <label className='text-purple-500 text-2xl'>Username:</label>
            <input className='p-2 bg-transparent border-[1px] rounded-md'
                type="text"
                placeholder='Type your email'
                value={username}
                onChange={saveUsername} />
            <label className='text-purple-500 text-2xl'>Password:</label>
            <input className='p-2 bg-transparent border-[1px] rounded-md'
                type="password"
                placeholder='Set a strong password'
                value={password}
                onChange={savePassword} />
            <label className='text-purple-500 text-2xl'>Name:</label>
            <input className='p-2 bg-transparent border-[1px] rounded-md'
                type="text"
                placeholder='Firstname Lastname'
                value={name}
                onChange={saveName} />
            <label className='text-purple-500 text-2xl'>Profile Picture:</label>
            <input className='p-2 bg-transparent border-[1px] rounded-md text-black'
                type="file"
                accept='image/*'
                title='Click here to add your Avatar'
                placeholder='Firstname Lastname'
                src={profilePicture}
                onChange={saveProfilePicture} />
            <div className='flex space-x-1 items-center'>
                <input type='checkbox' />
                <span className='text-black'>I accept all the <a className='text-blue-600'>Terms and Conditions</a></span>
            </div>

            <button className='rounded-md p-2 text-xl bg-purple-500 w-full'>SIGNUP</button>
        </div>
    )
}

export default InputForm