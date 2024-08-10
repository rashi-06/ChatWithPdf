export const dynamic = "force-dynamic"
// serverside rendering to fetch the updated documents from the server

import React from 'react'
import Documents from '@/components/Documents'


const Dashboard = () => {
  return (
    <div className='max-w-7xl h-full mx-auto '>
        <h1 className='font-extralight p-3 text-3xl bg-gray-100'>
            My Documents
        </h1>

        <Documents />
    </div>
  )
}

export default Dashboard