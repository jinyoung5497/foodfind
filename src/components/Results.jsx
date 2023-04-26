import React from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from './Fetch'

export default function Results() {
    const fetch = useFetch()
    return (
        <div className='flex flex-col items-center'>
            <div className='grid grid-cols-5 gap-5'>
                {fetch.total ? fetch.info.map((value, index) => {
                    return (
                        <Link to='detail'>
                            <div className='flex flex-col w-72 m-1 items-center ' onClick={() => fetch.checkAuth(value.id)}>
                                <img src={value.image} alt="Food image" className='w-full rounded-3xl' />
                                <p key={index} className='result-title'>{value.title}</p>
                            </div>
                        </Link>
                    )
                }) : <p className='absolute mt-80 text-xl'>No results found</p>}
            </div>
        </div>
    )
}
