/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement } from 'react'
import IconsContainer from '../Common/IconsContainer'

interface Section1Props {
  ref: any
}

const Section1 = ({ ref }: Section1Props): ReactElement => {
  return (
    <div ref={ref} id="About" className="pt-[10.5rem]">
      <div className=" text-[72px] font-normal mb-14">
        <p>안녕하세요.</p>
        <div className="mb-4">
          <p className=" whitespace-pre inline-block">상놈 개발자 </p>
          <p className=" inline-block text-[#FF5722]">김승모입니다.</p>
        </div>
        <p className="leading-[44px] block w-[60%] m-auto text-[36px] font-normal">
          열정적이며 시도해보는것을 좋아합니다. 먼저 시도해보고 필요한것을
          습득하면서 공부하고 같이 성장하는걸 좋아합니다.
        </p>
      </div>
      <div className="w-[calc(100%+192px)] ml-[-96px] flex justify-between mb-14">
        <div></div>
        <div className=" h-1 w-[60%] bg-main"></div>
      </div>
      <div className="w-full flex justify-between">
        <div />
        <IconsContainer />
      </div>
    </div>
  )
}

export default Section1
