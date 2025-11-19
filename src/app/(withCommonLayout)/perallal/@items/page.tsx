import { delay } from '@/src/utils/delay'
import React from 'react'

export default async function page() {


    await delay(4000)


    return (
        <div className='text-white bg-teal-500 h-[40vh]'>

            dynamic route
        </div>
    )
}
