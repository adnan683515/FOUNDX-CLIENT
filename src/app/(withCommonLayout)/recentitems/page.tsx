import { recentItems } from '@/src/services'
import React from 'react'

export default async function RecentPost() {



  const ans = await recentItems()

  console.log(ans)

  return (
    <div className='text-white'>RecentPost page</div>
  )
}
