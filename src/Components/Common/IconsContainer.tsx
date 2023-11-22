import { SNS } from '@/utils/Constant/Constant'
import useDevice from '@/utils/Hooks/useDevice'
import Image from 'next/image'
import React from 'react'

const IconsContainer = () => {
  const mobile = useDevice('mobile')

  return (
    <div className=" flex gap-6">
      {SNS.map((sns, index: number) => (
        <a rel="noreferrer" target="_blank" key={index} href={sns.link}>
          <Image
            className=" transition-all hover:scale-110"
            width={mobile ? 48 : 64}
            height={mobile ? 48 : 64}
            src={sns.src}
            alt={`sns logo`}
          />
        </a>
      ))}
    </div>
  )
}

export default IconsContainer
