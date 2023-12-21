'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import Moseung from '/public/assets/Images/moseung.jpeg'
import Tab from './Tab/Tab'
import useDevice from '@/utils/Hooks/useDevice'
import { FaBars } from 'react-icons/fa'

interface HeaderProps {
  currentScroll: string
  isHeaderShadow: boolean
}

const Header = ({ currentScroll, isHeaderShadow }: HeaderProps) => {
  const mobile = useDevice('mobile')
  const [isTabVisible, setIsTabVisible] = useState(false)
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
      {mobile ? (
        <FaBars
          className="h-6 w-6 cursor-pointer"
          onClick={() => setIsTabVisible(!isTabVisible)}
        />
      ) : (
        <Tab currentScroll={currentScroll} />
      )}
      {isTabVisible && (
        <div className="absolute bottom-0">
          <Tab currentScroll={currentScroll} />
        </div>
      )}
    </header>
  )
}

export default Header
