/* eslint-disable react/react-in-jsx-scope */
'use client'

import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'
import Projects from '@/Components/Sections/Projects/Projects'
import About from '@/Components/Sections/About'
import Skills from '@/Components/Sections/Skills'
import Work from '@/Components/Sections/Work'
import { useScroll } from '@/utils/Hooks/useScroll'
import { useRef, useState } from 'react'
import Others from '@/Components/Sections/Others'
import useDevice from '@/utils/Hooks/useDevice'

export default function Home() {
  const [currentScroll, setCurrentScroll] = useState<string>('About')
  const [isHeaderShadow, setIsHeaderShadow] = useState(false)

  const mainRef = useRef(null)
  const mobile = useDevice('mobile')

  const handleScroll = (): void => {
    if (mobile) {
      if (window.scrollY >= 200) {
        setIsHeaderShadow(true)
        return
      } else if (window.scrollY < 100) {
        setIsHeaderShadow(false)
        return
      }
    }
    if (window.scrollY >= 400) {
      setIsHeaderShadow(true)
    } else if (window.scrollY < 100) {
      setIsHeaderShadow(false)
    }
  }

  useScroll(() => handleScroll())

  return (
    <main
      ref={mainRef}
      // onScroll={handleScroll}
      className="flex min-h-screen flex-col items-center justify-center px-8 mobile:p-5"
    >
      <Header currentScroll={currentScroll} isHeaderShadow={isHeaderShadow} />
      <About setCurrentScroll={setCurrentScroll} />
      <Work setCurrentScroll={setCurrentScroll} />
      <Projects setCurrentScroll={setCurrentScroll} />
      <Skills setCurrentScroll={setCurrentScroll} />
      <Others setCurrentScroll={setCurrentScroll} />
      <Footer />
    </main>
  )
}
