import { SNS } from '@/utils/Constant/Constant'
import Image from 'next/image'
import React from 'react'

const IconsContainer = () => {
  return (
    <div className=" flex gap-6">
      {SNS.map((sns, index: number) => (
        <a rel="noreferrer" target="_blank" key={index} href={sns.link}>
          <Image
            className=" hover:scale-110 transition-all"
            width={64}
            height={64}
            src={sns.src}
            alt={`sns logo`}
          ></Image>
        </a>
      ))}
    </div>
  )
}

export default IconsContainer
