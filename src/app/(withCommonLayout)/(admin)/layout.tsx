import React, { ReactNode } from 'react'

export default function layout({ children }: { children: ReactNode }) {


  return (
    <div className='text-white flex justify-between'>

      <h1>Admin layout</h1>
      <div>
        {children}
      </div>
    </div>
  )
}
