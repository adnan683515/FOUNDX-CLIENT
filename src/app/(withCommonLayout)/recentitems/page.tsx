import { recentPost } from '@/src/services'
import { TWallet } from '@/src/TypeScript/walltet'
import Image from 'next/image'
import React from 'react'




export default async function RecentPost() {


  const ans = await recentPost()




  return (
    <div className='max-w-[1400px] mx-auto'>

      <h1>Recent Post Here</h1>

      <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  '>
        {
          ans?.data?.map((item: TWallet) => {
            return <div className='max-w-[400px] p-3 border border-white space-y-2 rounded-md' key={item?._id}>

              <h1 className='text-white'>Titlte :  {item?.title} </h1>

              <h2 className='text-white'> Description : {item?.description} </h2>

              <div className="w-full">
                {item?.images?.map((img, index) => (
                  <div key={index} className="max-w-[30%]">
                    <Image
                      className="rounded-lg  w-full object-cover"
                      src={img}
                      alt="wallet-image"
                      width={300}
                      height={300}
                    />
                  </div>
                ))}
              </div>

            </div>
          })
        }
      </div>
    </div>
  )
}
