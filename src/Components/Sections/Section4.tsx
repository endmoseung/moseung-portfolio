import React from 'react'
import Highlighter from '../Typography/Highlighter'
import GoTop from '../Animation/GoTop'
import useIntersection from '@/utils/Hooks/useIntersection'

interface Section4Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: any
}

const Section4 = ({ ref }: Section4Props) => {
  const [targetRefs, isIntersecting] = useIntersection()

  return (
    <div id={'Project'} className=" h-screen w-full relative pt-[10.5rem]">
      <div ref={targetRefs}>
        <GoTop isAnimationVisible={isIntersecting}>
          <Highlighter>Projects</Highlighter>
        </GoTop>
      </div>
      <div></div>
    </div>
  )
}

export default Section4
