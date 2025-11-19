import React from 'react'
import { ReactNode } from 'react'
export default function layout({ children, items, profile }: { children: ReactNode, items: ReactNode , profile : ReactNode}) {


    return (
        <div>
            <h1 className='text-white'>This is perallal layout</h1>
            <div className=''>
               <div className='w-full'>
                 {children}
               </div>
                <div className='w-full '>
                    {items}
                </div>

                <div>
                    {profile}
                </div>
            </div>
        </div>
    )
}
