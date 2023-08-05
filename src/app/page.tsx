/* eslint-disable react/react-in-jsx-scope */
'use client'

import Section1 from '@/Components/Sections/Section1'
import Header from '@/Components/Header/Header'
import { useRef, useState } from 'react'
import Section2 from '@/Components/Sections/Section2'
import Section3 from '@/Components/Sections/Section3'
import Footer from '@/Components/Footer/Footer'
import { useScroll } from '@/utils/Hooks/useScroll'
import Section4 from '@/Components/Sections/Section4'
import Section5 from '@/Components/Sections/Section5'
import ScrollTop from '@/Components/ScrollTop/ScrollTop'
import useIsDocument from '@/utils/Hooks/useIsDocument'

export default function Home() {
  const [currentScroll, setCurrentScroll] = useState<string>('About')
  const [isHeaderShadow, setIsHeaderShadow] = useState(false)

  console.log(currentScroll)

  const mainRef = useRef(null)

  const handleScroll = (): void => {
    if (window.scrollY >= 100) {
      setIsHeaderShadow(true)
    } else if (window.scrollY < 100) {
      setIsHeaderShadow(false)
    }
  }

  useScroll(() => handleScroll())

  const isDocument = useIsDocument()

  return (
    <main
      ref={mainRef}
      // onScroll={handleScroll}
      className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <Header currentScroll={currentScroll} isHeaderShadow={isHeaderShadow} />
      <Section1 setCurrentScroll={setCurrentScroll} />
      <Section2 setCurrentScroll={setCurrentScroll} />
      <Section3 setCurrentScroll={setCurrentScroll} />
      <Section4 setCurrentScroll={setCurrentScroll} />
      <Section5 setCurrentScroll={setCurrentScroll} />
      <Footer />
      {isDocument && isHeaderShadow && (
        <ScrollTop dom={document.querySelector('#layout') as Element} />
      )}
    </main>
  )
}
