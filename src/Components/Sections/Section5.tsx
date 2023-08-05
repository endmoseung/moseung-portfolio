import React from 'react'
import Highlighter from '../Typography/Highlighter'
import useIntersection from '@/utils/Hooks/useIntersection'
import GoTop from '../Animation/GoTop'
import { PRESENTATION, STUDY } from '@/utils/Constant/Constant'
import useIsVisible from '@/utils/Hooks/useIsVisible'
import { BiBulb } from 'react-icons/bi'

interface Section5Props {
  setCurrentScroll: (current: string) => void
}

const Section5 = ({ setCurrentScroll }: Section5Props) => {
  const [targetRefs, isIntersecting] = useIntersection()

  const refs = useIsVisible(() => setCurrentScroll('Others'), 0.3)

  return (
    <div
      id={'Others'}
      ref={refs}
      className="relative mb-10 h-fit w-full pt-[10.5rem]"
    >
      <div ref={targetRefs} className="flex justify-between">
        <div />
        <GoTop isAnimationVisible={isIntersecting}>
          <Highlighter size="small">Others</Highlighter>
        </GoTop>
      </div>
      <div className="flex flex-col gap-5 mb-5">
        <p className="mb-5 font-bold text-[3rem]">Study</p>
        {STUDY.map((study, index: number) => (
          <div className="flex flex-col gap-2" key={index}>
            <p className="font-bold text-[2rem] text-main">{study.title}</p>
            <p>{study.duration}</p>
            <div className="flex flex-col gap-2">
              {study.details.map((detail, index: number) => (
                <div className="flex items-center" key={index}>
                  <BiBulb className="mr-2" />
                  <p className="leading-4">{detail}</p>
                </div>
              ))}
            </div>
            <p>관련링크들</p>
            <div className="flex flex-col">
              {study.links.map((link, index: number) => (
                <a
                  className="underline font-bold text-black"
                  rel="noreferrer"
                  target="_blank"
                  key={index}
                  href={link.link}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div>
        <p className="font-bold text-[3rem]">Presentation</p>
        {PRESENTATION.map((presentation, index: number) => (
          <div key={index}>
            <p>{presentation.title}</p>
            <div>
              {presentation.details.map((detail, index: number) => (
                <p key={index}>{detail}</p>
              ))}
            </div>
            <div className="flex flex-col">
              {presentation.links.map((link, index: number) => (
                <a
                  className="underline font-bold text-black"
                  rel="noreferrer"
                  target="_blank"
                  key={index}
                  href={link.link}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section5
