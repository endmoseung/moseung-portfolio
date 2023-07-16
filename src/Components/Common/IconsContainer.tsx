import { SNS } from '@/utils/Constant/Constant'
import Image from 'next/image'
import React from 'react'

const IconsContainer = () => {
  return (
    <div>
      {SNS.map((sns, index: number) => (
        <a rel="noreferrer" target="_blank" key={index} href={sns.link}>
          <Image width={64} height={64} src={sns.src} alt={`sns logo`}></Image>
        </a>
      ))}
    </div>
  )
}

export default IconsContainer
