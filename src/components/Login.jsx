import React from 'react'
import { useAuth } from './Auth'

export default function Login() {
    const auth = useAuth()

    return (
        <>
            <div className='flex justify-center mt-16'>
                <div className='flex flex-col w-4/12 p-11 rounded-3xl gap-2 shadow-2xl'>
                    <p className='text-slate-400 text-sm'>Welcome Back!</p>
                    <h1 className='text-3xl font-bold'>Login to FoodFind.</h1>
                    <h4 className='self-start'>E-mail</h4>
                    <input type="text" placeholder='name@gmail.com' onChange={auth.getEmail} className='border-2 p-2 rounded-xl focus:outline-none focus:border-emerald-400'/>
                    <h4>Password</h4>
                    <input type="password" placeholder='Password' onChange={auth.getPassword} className='border-2 p-2 rounded-xl focus:outline-none focus:border-emerald-400'/>
                    <button onClick={auth.login} className='bg-emerald-400 p-3 mt-2 rounded-xl hover:bg-emerald-300 text-white text-bold'>Login</button>
                </div>
            </div>
        </>
    )
}
