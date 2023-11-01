'use client'

import React, { useState } from 'react'
import Card, { cn } from '@/app/components/Card'
import Image from 'next/image'
import avtar from '@/public/images/image-jeremy.png'
import exercise from '@/public/images/icon-exercise.svg'

export default function Home () {
  const [timeframe, setTimeframe] = useState('daily')
  return (
    <div className='flex flex-col min-h-screen w-full bg-veryDarkBlue  justify-center items-center '>
      <div className='flex  p-10 sm:p-12 w-full flex-col sm:flex-row  justify-center items-center font-Rubik gap-4 sm:gap-6 sm:max-h-[00px] sm:w-[1100px]  '>
        <div className='rounded-lg bg-darkBlue   w-full sm:w-[25%] h-full   '>
          <div className='flex sm:flex-col  bg-blue h-[60%] rounded-lg gap-12 p-6 sm:p-4 items-center sm:items-start'>
            <Image
              src={avtar}
              height={40}
              width={40}
              className='ring-2 rounded-full ring-white h-14 w-14 sm:min-h-14 sm:min-w-14'
            />

            <div className='flex flex-col gap-2'>
              <p className='text-sm font-light'>Report for</p>
              <p className='text-2xl sm:text-3xl font-normal'>Jeremy Robson</p>
            </div>
          </div>
          <div className='flex sm:flex-col gap-2 p-6 sm:justify-start justify-between items-start text-slate-500  '>
            <button
              onClick={() => setTimeframe('daily')}
              className={cn(
                'hover:text-white',
                timeframe == 'daily' && 'text-white'
              )}
            >
              Daily
            </button>
            <button
              onClick={() => setTimeframe('weekly')}
              className={cn(
                'hover:text-white',
                timeframe == 'weekly' && 'text-white'
              )}
            >
              Weekly
            </button>
            <button
              onClick={() => setTimeframe('monthly')}
              className={cn(
                'hover:text-white',
                timeframe == 'monthly' && 'text-white'
              )}
            >
              Monthly
            </button>
          </div>
        </div>
        <div className=' grid  sm:grid-cols-3 sm:grid-rows-2 grid-cols-1 h-full   sm:w-[80%] w-full    gap-8'>
          <Card timeframe={timeframe} icon={exercise} />
        </div>
      </div>
    </div>
  )
}
