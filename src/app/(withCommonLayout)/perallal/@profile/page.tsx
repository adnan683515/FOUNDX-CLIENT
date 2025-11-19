import { delay } from '@/src/utils/delay'
import React from 'react'

export default async function page() {



        await delay(5000)

  return (
    <div className='text-white bg-blue-500 min-h-[40vh] '>
        This is profile page
    </div>
  )
}
