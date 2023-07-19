'use client'

import Image from 'next/image'
import React from 'react'
import Moseung from '/public/assets/Images/moseung.jpeg'
import { TABS, TabsOriginType } from '@/utils/Constant/Constant'

interface HeaderProps {
  setCurrentScroll: (line: string) => void
  isHeaderShadow: boolean
}

const Header = ({ setCurrentScroll, isHeaderShadow }: HeaderProps) => {
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
        className=" rounded-full cursor-pointer"
        width={50}
        height={50}
        src={Moseung}
        alt="Writers logo"
      ></Image>
      <div className=" flex gap-5">
        {TABS.map((tab, index: number) => (
          <p
            className=" hover:text-sub transition-all cursor-pointer text-4xl font-bold"
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
