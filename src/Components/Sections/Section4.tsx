import React from 'react'

interface Section4Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any
}

const Section4 = ({ ref }: Section4Props) => {
  return (
    <div ref={ref} className="pt-[10.5rem]">
      <div className=" text-[72px] font-light">
        <p>안녕하세요.</p>
        <div>
          <p className=" whitespace-pre inline-block">상놈 개발자 </p>
          <p className=" inline-block text-[#FF5722]">김승모입니다.</p>
        </div>
      </div>
    </div>
  )
}

export default Section4
