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
import { data } from '@/app/components/data'

import { useAutoAnimate } from '@formkit/auto-animate/react'

export function cn (...inputs) {
  return twMerge(clsx(...inputs))
}

export default function Card ({ timeframe }) {
  const [animationParent] = useAutoAnimate()
  return (
    //  { data.map((d,index)=>()}
    <>
      {iconsWithTitle.map((item, index) => {
        const data2 = data[index]
        return (
          <div
            className={cn(
              '  relative rounded-lg  sm:h-full pt-6 flex flex-col items-end justify-end  overflow-hidden   h-52',
              item.backgroundColor
            )}
          >
            {' '}
            <Image
              src={item.src}
              height={70}
              className='absolute -top-1 overflow-hidden z-30 right-2'
            />
            <div
              className={`w-full h-[90%]  flex flex-col p-4 rounded-lg z-40  bg-darkBlue  `}
            >
              <div className='flex justify-between items-center p-2'>
                <p>{item.activityType}</p>

                <Image src={ellipsis} height={15} width={15} className='' />
              </div>
              <div className='flex sm:flex-col sm:items-start justify-between items-center gap-2 p-2'>
                <div ref={animationParent} className='text-3xl transition-all'>
                  {timeframe == 'daily' && data2.timeframes.daily.current}
                  {timeframe == 'weekly' && data2.timeframes.weekly.current}
                  {timeframe == 'monthly' && data2.timeframes.monthly.current}
                </div>
                <div className='text-xs flex gap-2'>
                  <p> Last</p>
                  {timeframe == 'daily' && (
                    <div>Daily - {data2.timeframes.daily.previous}hrs</div>
                  )}
                  {timeframe == 'weekly' && (
                    <div>
                      Weekly - {data2.timeframes.weekly.previous}
                      hrs
                    </div>
                  )}
                  {timeframe == 'monthly' && (
                    <div>
                      Monthly - {data2.timeframes.monthly.previous}
                      hrs
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
