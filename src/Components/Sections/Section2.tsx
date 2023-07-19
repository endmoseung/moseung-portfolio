'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import { SKILLS } from '@/utils/Constant/Constant'
import useIntersection from '@/utils/Hooks/useIntersection'
import React from 'react'
import Highlighter from '../Typography/Highlighter'
import GoTop from '../Animation/GoTop'
import useIsVisible from '@/utils/Hooks/useIsVisible'

interface Section2Props {
  setCurrentScroll: (current: string) => void
}

const Section2 = ({ setCurrentScroll }: Section2Props) => {
  const [targetRefs, isHighlighterIntersecting] = useIntersection(0.3)
  const [skill1TargetRefs, isSkill1Intersecting] = useIntersection(0.6)
  const [skill2TargetRefs, isSkill2Intersecting] = useIntersection(0)
  const [skill3TargetRefs, isSkill3Intersecting] = useIntersection(0)

  const refs = useIsVisible(() => setCurrentScroll('Skills'))

  return (
    <section ref={refs} id={'Skills'} className="flex h-screen w-full">
      <GoTop isAnimationVisible={isHighlighterIntersecting}>
        <Highlighter>SKills</Highlighter>
      </GoTop>
      <div className="pt-[260px]" ref={targetRefs}>
        {SKILLS.map((skill, index: number) => (
          <div key={index} className="flex flex-col mb-[120px]">
            <GoTop
              isNoInitial={true}
              isAnimationVisible={
                index === 0
                  ? isSkill1Intersecting
                  : index === 1
                  ? isSkill2Intersecting
                  : isSkill3Intersecting
              }
            >
              <div
                ref={
                  index === 0
                    ? skill1TargetRefs
                    : index === 1
                    ? skill2TargetRefs
                    : skill3TargetRefs
                }
              >
                <p className=" text-4xl">{skill.title}</p>
                <div className="flex gap-1">
                  {skill.sub.map((sub, subIndex: number) => (
                    <div key={subIndex}>{`${sub}${
                      subIndex !== skill.sub.length - 1 ? ',' : ''
                    }`}</div>
                  ))}
                </div>
              </div>
            </GoTop>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Section2
