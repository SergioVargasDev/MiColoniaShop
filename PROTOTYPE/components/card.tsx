'use client'

import {BiPlusCircle} from 'react-icons/bi'
import {BiMinusCircle} from 'react-icons/bi'
import { useState } from 'react'

interface CardProps {
    key: string;
    name: string;
    price: number;
    image: string;
}

export function Card({key, name, price, image}: CardProps) {
    const [count, setCount] = useState(0)

    function add() {
        setCount(count + 1)
    }

    function substract() {
        if (count > 0)
            setCount(count - 1 )
    }
    return (
        <div className='relative w-40 h-40'>
            <img 
            src={image}
            alt="producto"
            className="absolute object-cover w-40 h-40 rounded-full shadow-md z-10"/>
            <div className='relative w-40 h-80   flex flex-col justify-center items-center'>
                <div className="border-2 border-black z-0 w-52 rounded-2xl">
                    <div className="flex flex-col pt-32 h-52">
                        <h2 className='text-center'>{name}</h2>
                        <h2 className='text-center'>${price}</h2>
                        <div className="flex flex-row self-center gap-10 justify-center">
                            <button onClick={add}><BiPlusCircle className='self-center w-8 h-8'/></button>
                            <h2 className='text-center text-xl'>{count}</h2>
                            <button onClick={substract}><BiMinusCircle className='self-center w-8 h-8'/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}