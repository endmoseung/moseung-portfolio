import React from 'react'
import Highlighter from '../Typography/Highlighter'
import useIntersection from '@/utils/Hooks/useIntersection'
import GoTop from '../Animation/GoTop'
import { PRESENTATION, STUDY } from '@/utils/Constant/Constant'
import useIsVisible from '@/utils/Hooks/useIsVisible'

interface Section5Props {
  setCurrentScroll: (current: string) => void
}

const Section5 = ({ setCurrentScroll }: Section5Props) => {
  const [targetRefs, isIntersecting] = useIntersection()

  const refs = useIsVisible(() => setCurrentScroll('Others'))

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
      <div>
        <h1>Study</h1>
        {STUDY.map((study, index: number) => (
          <div key={index}>
            <p>{study.title}</p>
            <p>{study.duration}</p>
            <div>
              {study.details.map((detail, index: number) => (
                <p key={index}>{detail}</p>
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
        <h1>Presentation</h1>
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
