import React from 'react'
import Highlighter from '../Typography/Highlighter'
import Cursive from '../Typography/Cursive'
import Button from '../Common/Button'
import { WORK } from '@/utils/Constant/Constant'
import useIntersection from '@/utils/Hooks/useIntersection'
import GoTop from '../Animation/GoTop'
import useIsVisible from '@/utils/Hooks/useIsVisible'

interface Section3Props {
  setCurrentScroll: (current: string) => void
}

const Section3 = ({ setCurrentScroll }: Section3Props) => {
  const [targetRefs, isIntersecting] = useIntersection()

  const refs = useIsVisible(() => setCurrentScroll('Work'))

  return (
    <div id="Work" ref={refs} className="w-full relative pt-[10.5rem]">
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
