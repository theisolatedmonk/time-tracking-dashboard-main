import React from 'react'
import ellipsis from '@/public/images/icon-ellipsis.svg'
import exercise from '@/public/images/icon-exercise.svg'
import play from '@/public/images/icon-play.svg'
import selfcare from '@/public/images/icon-self-care.svg'
import social from '@/public/images/icon-social.svg'
import study from '@/public/images/icon-study.svg'
import work from '@/public/images/icon-work.svg'

const iconsWithTitle = [
  { src: work, activityType: 'Work', backgroundColor: 'bg-lightRedWork' },
  { src: play, activityType: 'Play', backgroundColor: 'bg-softBluePlay' },
  { src: study, activityType: 'Study', backgroundColor: 'bg-lightRedStudy' },
  {
    src: exercise,
    activityType: 'Exercise',
    backgroundColor: 'bg-limeGreenExercise'
  },
  { src: social, activityType: 'Social', backgroundColor: 'bg-violetSocial' },
  {
    src: selfcare,
    activityType: 'Seelf Care',
    backgroundColor: 'bg-softOrangeSelfCare'
  }
]

import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'

export function cn (...inputs) {
  return twMerge(clsx(...inputs))
}

export default function Card (props) {
  return (
    <>
      {iconsWithTitle.map(item => (
        <div
          className={cn(
            '  relative rounded-lg  sm:h-full pt-6 flex flex-col items-end justify-end  overflow-hidden   h-16',
            item.backgroundColor
          )}
        >
          <Image
            src={item.src}
            height={70}
            className='absolute -top-1 overflow-hidden z-30 right-2'
          />

          <div
            className={`w-full h-[90%]  flex flex-col p-4 rounded-lg z-40  bg-darkBlue `}
          >
            <div className='flex justify-between items-center p-2'>
              <p>{item.activityType}</p>

              <Image src={ellipsis} height={15} width={15} className='' />
            </div>
            <div className='flex sm:flex-col sm:items-start justify-between items-center gap-2 p-2'>
              <div className='text-3xl'>present</div>
              <div className='text-xs'>Last</div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
