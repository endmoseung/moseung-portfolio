/* eslint-disable react/react-in-jsx-scope */
'use client'

import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'
import ScrollTop from '@/Components/ScrollTop/ScrollTop'
import Projects from '@/Components/Sections/Projects'
import About from '@/Components/Sections/About'
import Skills from '@/Components/Sections/Skills'
import Work from '@/Components/Sections/Work'
import useIsDocument from '@/utils/Hooks/useIsDocument'
import { useScroll } from '@/utils/Hooks/useScroll'
import { useRef, useState } from 'react'
import Others from '@/Components/Sections/Others'

export default function Home() {
  const [currentScroll, setCurrentScroll] = useState<string>('About')
  const [isHeaderShadow, setIsHeaderShadow] = useState(false)

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
      className="flex min-h-screen flex-col items-center justify-center p-[30px] mobile:p-[20px]"
    >
      <Header currentScroll={currentScroll} isHeaderShadow={isHeaderShadow} />
      <About setCurrentScroll={setCurrentScroll} />
      <Skills setCurrentScroll={setCurrentScroll} />
      <Work setCurrentScroll={setCurrentScroll} />
      <Projects setCurrentScroll={setCurrentScroll} />
      <Others setCurrentScroll={setCurrentScroll} />
      <Footer />
      {isDocument && isHeaderShadow && (
        <ScrollTop dom={document.querySelector('#layout') as Element} />
      )}
    </main>
  )
}
