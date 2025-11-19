import Navber from '@/src/lib/components/Navber/Navber'
import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {


    return (
        <div>

            <Navber></Navber>
            <div>
                {children}
            </div>

        </div>
    )
}
