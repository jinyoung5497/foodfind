import React from 'react'
import { useFetch } from './Fetch'

export default function Detail() {
    const fetch = useFetch()
    return (
        <>
            <div className='flex justify-center flex-col items-center mx-40 cursor-default'>
                <div className='flex items-center justify-center flex-col bg-white shadow-md p-5 rounded-2xl w-full'>
                    <h1 className='text-3xl font-bold  pb-3'>{fetch.title}</h1>
                    {fetch.isVege && <h1 className='text-2xl '>Perfect for Vegetarians!</h1>}
                </div>
                <div className='grid grid-cols-2'>
                    <img src={fetch.image} alt="food image" className='my-4 rounded-3xl shadow-xl' />
                    <div className='text-3xl flex flex-col justify-center items-center gap-5'>
                        {fetch.diet.map((value, index) => {
                            return (
                                <p>{value}</p>
                            )
                        })}
                    </div>
                </div>
                <div className='grid grid-cols-3 p-10 my-5 rounded-3xl shadow-xl bg-neutral-100 w-fit'>
                    <h1 className='text-2xl font-bold mb-4'>Ingredients</h1>
                    <h1 className='text-2xl font-bold col-span-2'>Instructions</h1>
                    <ul>
                        {fetch.ingredients.map((value, index) => {
                            return (
                                <div className='flex gap-3 place-content-between '>
                                    <li>{value.name}</li>
                                    <span className='pr-7 mb-3'>{value.amount}{value.unit}</span>
                                </div>
                            )
                        })}
                    </ul>
                    <ol className='col-span-2'>
                        {fetch.analysed.map((value, index) => {
                            return (
                                <li className='mb-4 leading-7'>{`${index + 1}. ${value.step}`}</li>
                            )
                        })}
                    </ol>
                    <h1 className='font-bold text-xl my-3 col-span-3 justify-self-center'>Detailed Instruction</h1>
                    <p className='col-span-3 leading-10'>{fetch.instruction}</p>
                </div>
            </div>
        </>
    )
}
