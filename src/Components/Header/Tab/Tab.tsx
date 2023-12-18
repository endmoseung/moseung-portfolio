import React from 'react'
import { TABS, TabsOriginType } from '@/utils/Constant/Constant'

interface TabProps {
  currentScroll: string
}

const Tab = ({ currentScroll }: TabProps) => {
  const handleClickHeader = (tabs: TabsOriginType) => {
    document
      .querySelector(`#${tabs === 'About' ? 'layout' : tabs}`)
      ?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className=" flex flex-row gap-5 mobile:flex-col">
      {TABS.map((tab, index: number) => (
        <p
          className={`${
            currentScroll === tab.title ? 'text-sub' : ''
          } cursor-pointer text-xl font-bold transition-all hover:text-sub mobile:text-lg`}
          key={index}
          onClick={() => handleClickHeader(tab.title)}
        >
          {tab.title}
        </p>
      ))}
    </div>
  )
}

export default Tab
