import React from 'react'
import Card from '@/app/components/Card'
import Image from 'next/image'
import avtar from '@/public/images/image-jeremy.png'
export default function Fullpage () {
  return (
    <div className='flex gap-4 w-full flex-col sm:flex-row  h-full justify-center items-center'>
      <div className='rounded-lg bg-[hsl(235,46%,20%)]  w-full sm:w-[25%] h-full'>
        <div className='flex sm:flex-col p-4 bg-[hsl(235,45%,61%)] h-[60%] rounded-lg gap-4'>
          <div className='rounded-full'>
            <Image
              src={avtar}
              height={40}
              width={40}
              className='ring-1 rounded-full ring-white'
            />
          </div>
          <div className='flex flex-col'>
            <p className='text-xs '>Report for</p>
            <p className='text-xl '>Jeremy Robson</p>
          </div>
        </div>
        <div className='flex sm:flex-col gap-2 p-4 justify-start'>
          <button className='hover:'>Daily</button>
          <button className=''>Weekly</button>
          <button className=''>Monthly</button>
        </div>
      </div>
      <div className='flex flex-col  h-full  sm:flex-wrap    w-full sm:w-[75%]'>
        <div className='flex flex-wrap gap-y-[18px]  justify-center gap-6 '>
          <Card
            backgoundcolor={'bg-[hsl(15,100%,70%)]'}
            childbackgrondcolor={'bg-[hsl(235,45%,61%)]'}
            Activity={'rc'}
            time={'4hrs'}
            lastTime={'5hrs'}
          />
          <Card
            backgoundcolor={'bg-[hsl(15,100%,70%)]'}
            childbackgrondcolor={'bg-[hsl(235,45%,61%)]'}
            Activity={'rc'}
            time={'4hrs'}
            lastTime={'5hrs'}
          />
          <Card
            backgoundcolor={'bg-[hsl(15,100%,70%)]'}
            childbackgrondcolor={'bg-[hsl(235,45%,61%)]'}
            Activity={'rc'}
            time={'4hrs'}
            lastTime={'5hrs'}
          />
          <Card
            backgoundcolor={'bg-[hsl(15,100%,70%)]'}
            childbackgrondcolor={'bg-[hsl(235,45%,61%)]'}
            Activity={'rc'}
            time={'4hrs'}
            lastTime={'5hrs'}
          />
          <Card
            backgoundcolor={'bg-[hsl(15,100%,70%)]'}
            childbackgrondcolor={'bg-[hsl(235,45%,61%)]'}
            Activity={'rc'}
            time={'4hrs'}
            lastTime={'5hrs'}
          />
          <Card
            backgoundcolor={'bg-[hsl(15,100%,70%)]'}
            childbackgrondcolor={'bg-[hsl(235,45%,61%)]'}
            Activity={'rc'}
            time={'4hrs'}
            lastTime={'5hrs'}
          />
        </div>
      </div>
    </div>
  )
}
