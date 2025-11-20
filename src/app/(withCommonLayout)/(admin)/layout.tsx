import React, { ReactNode } from 'react'

export default function layout({children} : {children :  ReactNode}) {


  return (
    <div className='text-white'>

        <h1>Admin layout</h1>
        {children}
    </div>
  )
}
