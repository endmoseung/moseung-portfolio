/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement } from 'react'
import IconsContainer from '../Common/IconsContainer'

interface Section1Props {
  ref: any
}

const Section1 = ({ ref }: Section1Props): ReactElement => {
  return (
    <div ref={ref} className="pt-[10.5rem]">
      <div className=" text-[72px] font-normal">
        <p>안녕하세요.</p>
        <div>
          <p className=" whitespace-pre inline-block">상놈 개발자 </p>
          <p className=" inline-block text-[#FF5722]">김승모입니다.</p>
        </div>
        <IconsContainer></IconsContainer>
      </div>
    </div>
  )
}

export default Section1
