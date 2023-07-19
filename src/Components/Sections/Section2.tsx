/* eslint-disable @typescript-eslint/no-explicit-any */
import { SKILLS } from '@/utils/Constant/Constant'
import useIntersection from '@/utils/Hooks/useIntersection'
import React from 'react'
import Highlighter from '../Typography/Highlighter'
import GoTop from '../Animation/GoTop'

interface Section2Props {
  ref: any
}

const Section2 = ({ ref }: Section2Props) => {
  const [targetRefs, isIntersecting] = useIntersection()

  return (
    <section
      id={'Skills'}
      ref={ref}
      className="h-screen w-full flex pt-[10.5rem]"
    >
      <GoTop isAnimationVisible={isIntersecting}>
        <Highlighter>SKills</Highlighter>
      </GoTop>
      <div ref={targetRefs}>
        {SKILLS.map((skill, index: number) => (
          <div key={index}>
            <p>{skill.title}</p>
            <div className="flex ">
              {skill.sub.map((sub, subIndex: number) => (
                <div key={subIndex}>{sub}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Section2
