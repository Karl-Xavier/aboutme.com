import React from 'react'
import { SmileyMeh } from 'phosphor-react'

export default function Error (){
    return (
        <div className='h-screen grid place-content-center'>
            <h1 className='text-red-600 flex flex-row'>You Are Lost.<SmileyMeh size={45} weight='fill' color='#f00'/></h1>
        </div>
    )
}