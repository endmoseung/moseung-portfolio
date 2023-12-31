import React from 'react'
import Highlighter from '../Typography/Highlighter'
import useIntersection from '@/utils/Hooks/useIntersection'
import GoTop from '../Animation/GoTop'
import useIsVisible from '@/utils/Hooks/useIsVisible'
import Image from 'next/image'
import Link from '../Typography/Link'
import { WorkList } from '@/utils/Constant/Work'

interface Section3Props {
  setCurrentScroll: (current: string) => void
}

const Work = ({ setCurrentScroll }: Section3Props) => {
  const [targetRefs, isIntersecting] = useIntersection()

  const refs = useIsVisible(() => setCurrentScroll('Work'))

  return (
    <section
      id="Work"
      ref={refs}
      className=" relative w-full max-w-[1200px] break-keep rounded-[50px] mobile:rounded-[30px] mobile:p-8"
    >
      <GoTop isAnimationVisible={isIntersecting}>
        <Highlighter>Work</Highlighter>
      </GoTop>
      <div className="flex flex-row mobile:flex-col" ref={targetRefs}>
        <Image
          width={200}
          height={200}
          alt="hodoo_image"
          src={'/assets/Images/hodoo.jpeg'}
        />
        <div className="flex flex-col gap-5 border-l border-b-black pl-[30px]">
          <h1 className=" text-[48px] mobile:text-[30px] ">호두랩스</h1>
          <div className="text-xl mobile:text-base">
            <p>2023.4 ~ 현재</p>
            <div className="flex">
              <Link
                className="mr-2 whitespace-pre-wrap"
                href="https://www.mk.co.kr/news/business/10869152"
              >
                {'국내 학원 진출, '}
              </Link>
              <Link href="https://www.mk.co.kr/news/business/10820137">
                베트남 일본 진출
              </Link>
              <p>을 한 아이들 대상 에듀테크 플랫폼</p>
            </div>
          </div>
          <h3 className="text-[36px] mobile:text-2xl">주요업무</h3>
          <ul>
            {WorkList.map((work) => (
              <li
                className="list-disc font-MainFont text-xl mobile:text-base"
                key={work}
              >
                {work}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Work
