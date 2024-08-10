"use client"

//whenever their is interaction on the page use client side rendering

import React from 'react'
import { Button } from './ui/button'
import { PlusCircleIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

const PlaceholderDocument = () => {

    const router = useRouter();


    const handleClick=()=>{
        router.push("/dashboard/upload");
    }

  return (
    <Button
        onClick={handleClick} 
        className='flex justify-center items-center w-68 h-80 rounded-md bg-gray-200 drop-shadow-md text-gray-400'>
        <PlusCircleIcon className='h-16 w-16' />
        <p>Add a Document</p>
    </Button>
  )
}

export default PlaceholderDocument