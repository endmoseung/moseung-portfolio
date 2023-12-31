'use client'

import React, { ReactElement } from 'react'
import IconsContainer from '../Common/IconsContainer'
import useIsVisible from '@/utils/Hooks/useIsVisible'

interface AboutProps {
  setCurrentScroll: (current: string) => void
}

const About = ({ setCurrentScroll }: AboutProps): ReactElement => {
  const refs = useIsVisible(() => setCurrentScroll('About'))

  return (
    <section
      ref={refs}
      id="About"
      className="w-[calc(100%)] py-32 tablet:py-24 mobile:py-20 "
    >
      <div className="mb-14 text-start font-MainFont text-6xl font-bold leading-[82.5px] transition-all duration-300 tablet:text-5xl tablet:leading-[66px] mobile:text-4xl mobile:leading-[50px]">
        <p>안녕하세요.</p>
        <div className="mb-8 break-keep">
          <p className="inline-block whitespace-pre ">지치치 않는 열정적인</p>
          <br />
          <p className=" inline-block text-[#FF5722]">
            프론트엔드 개발자 김승모입니다.
          </p>
        </div>
        <p className="m-auto flex w-[500px] justify-center whitespace-pre text-2xl font-normal tablet:w-full mobile:text-start mobile:text-base">
          {
            '사람을 좋아하고 소통을 중요시하는 협업을 사랑하는\n개발자로서, 상호간의 협업과 소통을 통해 최상의\n결과물을 만들어내기 위한 팀 문화에 관심이 많아\n회사에 기여한 경험이 있습니다.\n지식을 습득하고 성장하기 위해 꾸준히 공부하고,\n함께 성장하는 환경에서 빠르게 발전하고 있습니다.'
          }
        </p>
      </div>
      <div className="mb-14 ml-[-96px] flex w-[calc(100%+192px)] justify-between">
        <div />
        <div className=" h-1 w-[60%] bg-main" />
      </div>
      <div className="flex w-full justify-between">
        <div />
        <IconsContainer />
      </div>
    </section>
  )
}

export default About
