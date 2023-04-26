import React from 'react'
import { useFetch } from './Fetch'

export default function Category() {
    const fetch = useFetch()
    return (
        <>
            <div className='flex place-content-evenly my-5'>
                <button className='' onClick={() => fetch.getCategory("American")}>American</button>
                <button className='' onClick={() => fetch.getCategory("Chinese")}>Chinese</button>
                <button className='' onClick={() => fetch.getCategory("European")}>European</button>
                <button className='' onClick={() => fetch.getCategory("french")}>French</button>
                <button className='' onClick={() => fetch.getCategory("Indian")}>Indian</button>
                <button className='' onClick={() => fetch.getCategory("Italian")}>Italian</button>
                <button className='' onClick={() => fetch.getCategory("Japanese")}>Japanese</button>
                <button className='' onClick={() => fetch.getCategory("Korean")}>Korean</button>
                <button className='' onClick={() => fetch.getCategory("Maxican")}>Maxican</button>
                <button className='' onClick={() => fetch.getCategory("Mediterranean")}>Mediterranean</button>
                <button className='' onClick={() => fetch.getCategory("Southern")}>Southern</button>
                <button className='' onClick={() => fetch.getCategory("Spanish")}>Spanish</button>
            </div>

        </>
    )
}
