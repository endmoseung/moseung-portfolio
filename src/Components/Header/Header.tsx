'use client'

import Image from 'next/image'
import React from 'react'
import Moseung from '/public/assets/Images/moseung.jpeg'
import { TABS, TabsOriginType } from '@/utils/Constant/Constant'

interface HeaderProps {
  currentScroll: string
  isHeaderShadow: boolean
}

const Header = ({ currentScroll, isHeaderShadow }: HeaderProps) => {
  const handleClickHeader = (tabs: TabsOriginType) => {
    setTimeout(
      () =>
        document
          .querySelector(`#${tabs === 'About' ? 'layout' : tabs}`)
          ?.scrollIntoView({ behavior: 'smooth' }),
      0
    )
  }

  return (
    <div
      style={{
        boxShadow: isHeaderShadow
          ? 'rgba(0, 0, 0, 0.03) 0px 30px 30px 0px'
          : '',
      }}
      className=" transition-all duration-300 z-10 w-full bg-white px-24 py-7 flex items-center justify-between fixed top-0"
    >
      <Image
        className=" cursor-pointer rounded-full"
        width={50}
        height={50}
        src={Moseung}
        alt="Writers logo"
      />
      <div className=" flex gap-5">
        {TABS.map((tab, index: number) => (
          <p
            className={`${
              currentScroll === tab.title ? 'text-sub' : ''
            } cursor-pointer text-4xl font-bold transition-all hover:text-sub`}
            key={index}
            onClick={() => handleClickHeader(tab.title)}
          >
            {tab.title}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Header
