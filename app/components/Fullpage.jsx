import React from 'react'
import Card from '@/app/components/Card'
import Image from 'next/image'
import avtar from '@/public/images/image-jeremy.png'
export default function Fullpage () {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 w-full bg-[hsl(226,43%,10%)] py-40 px-20 gap-x-4 h-full justify-center items-center'>
      <div className='rounded-lg bg-[hsl(235,46%,20%)]  w-full sm:w-40 h-full'>
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
        <div className='grid p-4 sm:grid-cols-1 grid-cols-3'>
          <p className=''>Daily</p>
          <p className=''>Weekly</p>
          <p className=''>Monthly</p>
        </div>
      </div>
      <div className='flex flex-col  h-[50%]  flex-wrap gap-x-4  w-full'>
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
  )
}
