import React from 'react'
import { useFetch } from './Fetch'
import { Category, Results, Detail } from './index'
import { Link } from 'react-router-dom'
import { useAuth } from './Auth'

function Home() {
    const fetch = useFetch()
    
    return (
        <>
            <div className=''>
                
                <Link to='detail'>
                    {fetch.resultToggle ? <><Category /><Results /></> : <Detail />}
                </Link>
            </div>
        </>
    )
}

export default Home
