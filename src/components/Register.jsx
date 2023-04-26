import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const auth = useAuth()
    const navigate = useNavigate()

    return (
        <>
            <div className='flex justify-center mt-16'>
                <div className='flex flex-col w-auto p-11 rounded-3xl gap-2 shadow-2xl'>
                    <p className='text-slate-400 text-sm'>START FOR FREE</p>
                    <h1 className='text-3xl font-bold'>Sign up to FoodFind.</h1>
                    <div>
                        <p className='text-slate-400 text-sm inline-block w-fit'>Already a member?</p>
                        <button onClick={() => navigate('/login')} className='inline-block text-start w-fit ml-2 text-emerald-400 font-semibold'>Login</button>
                    </div>
                    <h4 className='self-start'>E-mail</h4>
                    <input type="text" placeholder='name@gmail.com' onChange={auth.getEmail} className='border-2 p-2 rounded-xl focus:outline-none focus:border-emerald-400'/>
                    <h4>Password</h4>
                    <input type="password" placeholder='Password' onChange={auth.getPassword} className='border-2 p-2 rounded-xl focus:outline-none focus:border-emerald-400'/>
                    <h4>Confirm Password</h4>
                    <input type="password" placeholder='Confirm Password' onChange={auth.getConfirm} className='border-2 p-2 rounded-xl focus:outline-none focus:border-emerald-400'/>
                    <button onClick={auth.register} className='bg-emerald-400 p-3 mt-2 rounded-xl hover:bg-emerald-300 text-white text-bold'>Create an account</button>
                </div>
            </div>
        </>
    )
}
