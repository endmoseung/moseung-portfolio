import Image from 'next/image'
import React from 'react'
import Moseung from '/public/assets/Images/moseung.jpeg'
import { TABS } from '@/utils/Constant/Constant'

interface HeaderProps {
  setCurrentScroll: (line: string) => void
}

const Header = ({ setCurrentScroll }: HeaderProps) => {
  return (
    <div className=" z-10 w-[calc(100%-196px)] text-sub bg-white px-24 py-7 flex items-center justify-between fixed top-0 left-24">
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
            className=" cursor-pointer text-4xl font-bold"
            key={index}
            onClick={() => setCurrentScroll(tab.link)}
          >
            {tab.title}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Header
