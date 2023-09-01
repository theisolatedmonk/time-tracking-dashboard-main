import React from 'react'
import ellipsis from '@/public/images/icon-ellipsis.svg'
import exercise from '@/public/images/icon-exercise.svg'
import play from '@/public/images/icon-exercise.svg'
import selfcare from '@/public/images/icon-self-care.svg'
import social from '@/public/images/icon-social.svg'
import study from '@/public/images/icon-study.svg'
import work from '@/public/images/icon-work.svg'

import Image from 'next/image'

export default function Card (props) {
  return (
    <div
      className={`w-full rounded-lg sm:w-40 h-full flex flex-col items-end justify-end   ${props.backgoundcolor}`}
    >
      <div
        className={`w-full h-[80%] flex flex-col p-2 rounded-lg   ${props.childbackgrondcolor}`}
      >
        <div className='flex justify-between items-center'>
          <p>{props.Activity}</p>

          <Image src={ellipsis} height={15} width={15} className='' />
        </div>
        <div className='flex sm:flex-col'>
          <div className='text-2xl'>{props.time}</div>
          <div className='text-xs'>Last Week - {props.lastTime}</div>
        </div>
      </div>
    </div>
  )
}
