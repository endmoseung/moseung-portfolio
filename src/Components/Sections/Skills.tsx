'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */
import { SKILLS } from '@/utils/Constant/Constant'
import useIntersection from '@/utils/Hooks/useIntersection'
import React from 'react'
import Highlighter from '../Typography/Highlighter'
import GoTop from '../Animation/GoTop'
import useIsVisible from '@/utils/Hooks/useIsVisible'

interface SkillsProps {
  setCurrentScroll: (current: string) => void
}

const Skills = ({ setCurrentScroll }: SkillsProps) => {
  const [targetRefs, isHighlighterIntersecting] = useIntersection(0.3)
  const [skill1TargetRefs, isSkill1Intersecting] = useIntersection(0.6)
  const [skill2TargetRefs, isSkill2Intersecting] = useIntersection(0)
  const [skill3TargetRefs, isSkill3Intersecting] = useIntersection(0)

  const refs = useIsVisible(() => setCurrentScroll('Skills'))

  return (
    <section
      ref={refs}
      id={'Skills'}
      className="flex w-full flex-col gap-20 pt-32 tablet:gap-16 tablet:pt-24 mobile:gap-12 mobile:pt-20"
    >
      <GoTop isAnimationVisible={isHighlighterIntersecting}>
        <Highlighter>SKills</Highlighter>
      </GoTop>
      <div className="" ref={targetRefs}>
        {SKILLS.map((skill, index: number) => (
          <div
            key={index}
            className="mb-[120px] flex flex-col mobile:mb-[60px]"
          >
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
                className="flex flex-col gap-y-5"
                ref={
                  index === 0
                    ? skill1TargetRefs
                    : index === 1
                    ? skill2TargetRefs
                    : skill3TargetRefs
                }
              >
                <p className="w-fit rounded-full bg-gray-900 px-6 py-3 text-4xl text-white mobile:text-2xl">
                  {skill.title}
                </p>
                <div className="flex flex-wrap gap-1">
                  {skill.sub.map((sub, subIndex: number) => (
                    <p
                      className="text-xl mobile:text-base "
                      key={subIndex}
                    >{`${sub}${
                      subIndex !== skill.sub.length - 1 ? ',' : ''
                    }`}</p>
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

export default Skills
