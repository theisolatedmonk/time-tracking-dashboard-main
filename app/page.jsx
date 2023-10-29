import React from 'react'
import Card from '@/app/components/Card'
import Image from 'next/image'
import avtar from '@/public/images/image-jeremy.png'
import exercise from '@/public/images/icon-exercise.svg'

export default function Home () {
  return (
    <div className='flex gap-- p-10 sm:p-20 w-full flex-col sm:flex-row  h-screen  justify-center items-center font-Rubik gap-6 bg-veryDarkBlue'>
      <div className='rounded-lg bg-darkBlue hover:bg-  w-full sm:w-[25%] h-full  border-2 border-red-400 '>
        <div className='flex sm:flex-col  bg-blue h-[60%] rounded-lg gap-12 p-6'>
          <div className='rounded-full '>
            <Image
              src={avtar}
              height={40}
              width={40}
              className='ring-2 rounded-full ring-white h-14 w-14'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-sm font-light'>Report for</p>
            <p className='text-3xl font-normal'>Jeremy Robson</p>
          </div>
        </div>
        <div className='flex sm:flex-col gap-2 p-6 justify-start items-start'>
          <button className='hover:'>Daily</button>
          <button className=''>Weekly</button>
          <button className=''>Monthly</button>
        </div>
      </div>
      <div className=' grid  grid-cols-3 grid-rows-2 h-full     w-[80%] border-2  border-red-400 gap-8'>
        <Card icon={exercise} />
      </div>
    </div>
  )
}
