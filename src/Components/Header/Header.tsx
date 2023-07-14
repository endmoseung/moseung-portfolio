import Image from 'next/image'
import React from 'react'
// import Moseung from '../../../../public/assets/Images/moseung.jpeg'

const Header = () => {
  const TABS = [
    { title: 'Home', link: 'Home' },
    { title: 'About', link: 'About' },
    { title: 'TechStack', link: 'TechStack' },
    { title: 'Projects', link: 'Projects' },
    { title: 'Contact', link: 'Contact' },
  ]

  return (
    <div className=" flex justify-between">
      <Image alt="Writers logo"></Image>
      {TABS.map((tab) => (
        <p>{tab.title}</p>
      ))}
    </div>
  )
}

export default Header
