import React from 'react'
import { NavLink } from 'react-router-dom'
import { useFetch } from './Fetch'

export default function Navbar() {
    const fetch = useFetch()

    return (
        <>
            <div className='Navbar-div mx-40 flex flex-row p-5 items-center place-content-between'>
                <h1 className='text-xl font-bold'>FoodFind</h1>
                <div className='flex items-center ml-24'>
                    <input type="text" placeholder='Search' className='self-center w-80 ml-20 border rounded-full border-slate-400 px-3 py-0.5' onChange={fetch.searchInputChange}/>
                    <button className='bg-emerald-500 rounded-full w-6 search-btn right-10' onClick={fetch.searchButtonClicked}><i className='fa fa-search text-slate-50 ' onClick={fetch.searchButtonClicked}></i></button>
                </div>
                <div className=' text-lg'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='register' className='ml-10'>Register</NavLink>
                    <NavLink to='login' className='ml-10'>Login</NavLink>
                </div>
            </div>
        </>
    )
}
