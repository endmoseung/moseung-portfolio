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
    <header
      style={{
        boxShadow: isHeaderShadow
          ? 'rgba(0, 0, 0, 0.03) 0px 30px 30px 0px'
          : '',
        backgroundColor: isHeaderShadow ? 'white' : 'transparent',
      }}
      className=" fixed top-0 z-10 flex w-full items-center justify-between px-8 py-5 transition-all duration-300 mobile:px-5"
    >
      <Image
        className=" cursor-pointer rounded-full"
        width={50}
        height={50}
        src={Moseung}
        alt="Writers logo"
        onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })}
      />
      <div className=" flex gap-5">
        {TABS.map((tab, index: number) => (
          <p
            className={`${
              currentScroll === tab.title ? 'text-sub' : ''
            } cursor-pointer text-2xl font-bold transition-all hover:text-sub mobile:text-xl`}
            key={index}
            onClick={() => handleClickHeader(tab.title)}
          >
            {tab.title}
          </p>
        ))}
      </div>
    </header>
  )
}

export default Header
