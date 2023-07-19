import React from 'react'
import Highlighter from '../Typography/Highlighter'
import useIntersection from '@/utils/Hooks/useIntersection'
import GoTop from '../Animation/GoTop'

interface Section5Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any
}

const Section5 = ({ ref }: Section5Props) => {
  const [targetRefs, isIntersecting] = useIntersection()

  return (
    <div
      id={'Others'}
      ref={ref}
      className="h-screen w-full relative pt-[10.5rem]"
    >
      <div ref={targetRefs} className="flex justify-between">
        <div></div>
        <GoTop
          className={' absolute right-[-20px] top-0'}
          isAnimationVisible={isIntersecting}
        >
          <Highlighter>Others</Highlighter>
        </GoTop>
      </div>
      <div>
        <h1>Study</h1>
        <div></div>
      </div>
    </div>
  )
}

export default Section5
