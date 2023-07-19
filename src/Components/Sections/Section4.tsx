import React from 'react'
import Highlighter from '../Typography/Highlighter'
import GoTop from '../Animation/GoTop'
import useIntersection from '@/utils/Hooks/useIntersection'
import useIsVisible from '@/utils/Hooks/useIsVisible'

interface Section4Props {
  setCurrentScroll: (current: string) => void
}

const Section4 = ({ setCurrentScroll }: Section4Props) => {
  const [targetRefs, isIntersecting] = useIntersection()

  const refs = useIsVisible(() => setCurrentScroll('Project'))

  return (
    <div
      ref={refs}
      id={'Project'}
      className=" relative h-screen w-full pt-[10.5rem]"
    >
      <div ref={targetRefs}>
        <GoTop isAnimationVisible={isIntersecting}>
          <Highlighter size="small">Projects</Highlighter>
        </GoTop>
      </div>
      <div></div>
    </div>
  )
}

export default Section4
