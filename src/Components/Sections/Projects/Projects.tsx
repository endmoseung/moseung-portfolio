'use client'
import React, { useRef } from 'react'
import Highlighter from '../../Typography/Highlighter'
import GoTop from '../../Animation/GoTop'
import useIntersection from '@/utils/Hooks/useIntersection'
import useIsVisible from '@/utils/Hooks/useIsVisible'
import ProjectSection from './ProjectSection'
import useIntersections from '@/utils/Hooks/useIntersections'

interface ProjectsProps {
  setCurrentScroll: (current: string) => void
}

const MaxProjectNumber = 4

const Projects = ({ setCurrentScroll }: ProjectsProps) => {
  const [targetRefs, isIntersecting] = useIntersection()
  const sectionRefs = Array(MaxProjectNumber)
    .fill(null)
    .map(() => useRef<HTMLDivElement>(null))
  const [_, isInterSectings] = useIntersections(sectionRefs)
  console.log(isInterSectings)

  const refs = useIsVisible(() => setCurrentScroll('Project'))

  const a = Array.from({ length: MaxProjectNumber })

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
      {a.map((_, index) => (
        <ProjectSection ref={sectionRefs[index]} key={index} />
      ))}
    </section>
  )
}

export default Projects
