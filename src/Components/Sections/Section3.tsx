import React from 'react'
import Highlighter from '../Typography/Highlighter'
import Cursive from '../Typography/Cursive'
import Button from '../Common/Button'
import { WORK } from '@/utils/Constant/Constant'
import useIntersection from '@/utils/Hooks/useIntersection'
import GoTop from '../Animation/GoTop'

interface Section3Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any
}

const Section3 = ({ ref }: Section3Props) => {
  const [targetRefs, isIntersecting] = useIntersection()

  return (
    <div id="Work" ref={ref} className="w-full relative pt-[10.5rem]">
      <div ref={targetRefs}>
        {WORK.map((work, index: number) => (
          <div key={index}>
            <Cursive>{work.description}</Cursive>
            <Button>{work.buttonTitle}</Button>
          </div>
        ))}
      </div>
      <GoTop
        className={' absolute right-[-20px] top-0'}
        isAnimationVisible={isIntersecting}
      >
        <Highlighter>Work</Highlighter>
      </GoTop>
    </div>
  )
}

export default Section3
