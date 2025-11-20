import React, { ReactNode } from 'react'

export default function layout({children , post} : {children : ReactNode, post : ReactNode}) {
  return (
    <div>

        {children}

        {post}
    </div>
  )
}
