/* eslint-disable @typescript-eslint/no-explicit-any */
import { SKILLS } from '@/utils/Constant/Constant'
import React from 'react'

interface Section2Props {
  children: React.ReactNode
  ref: any
}

const Section2 = ({ children, ref }: Section2Props) => {
  return (
    <section ref={ref} className="w-full flex pt-[10.5rem]">
      {children}
      <div>
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
