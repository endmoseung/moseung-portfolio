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
    <div
      ref={refs}
      id="About"
      className="mb-[10.5rem] w-[calc(100%)] pl-[60px] pt-[10.5rem]"
    >
      <div className=" mb-14 text-[72px] font-normal">
        <p>안녕하세요.</p>
        <div className="mb-4">
          <p className=" inline-block whitespace-pre">
            누구와도 잘 어울릴 수 있는{' '}
          </p>
          <p className=" inline-block text-[#FF5722]">
            1년차 개발자 김승모입니다.
          </p>
        </div>
        <p className="m-auto block w-[60%] whitespace-pre text-[36px] font-normal leading-[44px]">
          {
            '사람을 좋아하고 소통을 중요시하는 협업을 사랑하는 개발자로서,\n상호간의 협업과 소통을 통해 최상의 결과물을 만들어내기 위한\n팀 문화에 관심이 많아 회사에 기여한 경험이 있습니다.\n지식을 습득하고 성장하기 위해 꾸준히 공부하고,\n함께 성장하는 환경에서 빠르게 발전하고 있습니다.'
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
    </div>
  )
}

export default About
