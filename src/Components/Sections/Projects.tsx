'use client'
import React from 'react'
import Highlighter from '../Typography/Highlighter'
import GoTop from '../Animation/GoTop'
import useIntersection from '@/utils/Hooks/useIntersection'
import useIsVisible from '@/utils/Hooks/useIsVisible'

interface ProjectsProps {
  setCurrentScroll: (current: string) => void
}

const Projects = ({ setCurrentScroll }: ProjectsProps) => {
  const [targetRefs, isIntersecting] = useIntersection()

  const refs = useIsVisible(() => setCurrentScroll('Project'))

  return (
    <section
      ref={refs}
      id={'Project'}
      className=" relative  w-full pt-[10.5rem]"
    >
      <div ref={targetRefs}>
        <GoTop isAnimationVisible={isIntersecting}>
          <Highlighter size="small">Projects</Highlighter>
        </GoTop>
      </div>
      {/* <div className=" h-[3144px]">
        <ScrollSection></ScrollSection>
      </div> */}
    </section>
  )
}

export default Projects
