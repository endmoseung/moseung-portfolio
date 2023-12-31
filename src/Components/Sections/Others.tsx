import React from 'react'
import Highlighter from '../Typography/Highlighter'
import useIntersection from '@/utils/Hooks/useIntersection'
import GoTop from '../Animation/GoTop'
import { PRESENTATION, STUDY } from '@/utils/Constant/Constant'
import useIsVisible from '@/utils/Hooks/useIsVisible'
import Card from '../Card/Card'

interface OthersProps {
  setCurrentScroll: (current: string) => void
}

const Others = ({ setCurrentScroll }: OthersProps) => {
  const [targetRefs, isIntersecting] = useIntersection()

  const refs = useIsVisible(() => setCurrentScroll('Others'), 0.3)

  return (
    <section
      id={'Others'}
      ref={refs}
      className="relative mb-10 h-fit w-full pt-[10.5rem]"
    >
      <div ref={targetRefs} className="flex justify-between">
        <div />
        <GoTop isAnimationVisible={isIntersecting}>
          <Highlighter>Others</Highlighter>
        </GoTop>
      </div>
      <div className="mb-5 flex flex-col gap-5">
        {STUDY.map((study, index: number) => (
          <Card
            key={study.title}
            cards={study}
            index={index}
            subTitle="관련 링크들"
          />
        ))}
      </div>
      <div>
        {PRESENTATION.map((presentation, index: number) => (
          <Card
            key={presentation.title}
            cards={presentation}
            index={index}
            subTitle="관련 링크들"
          />
        ))}
      </div>
    </section>
  )
}

export default Others
