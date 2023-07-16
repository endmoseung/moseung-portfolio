'use client'

import Section1 from '@/Components/Sections/Section1'
import Header from '@/Components/Header/Header'
import { useRef, useState } from 'react'
import Section2 from '@/Components/Sections/Section2'
import Section3 from '@/Components/Sections/Section3'
import Footer from '@/Components/Footer/Footer'
import GoTop from '@/Components/Animation/Gotop'
import { useScroll } from '@/utils/Hooks/useScroll'
import useIntersect from '@/utils/Hooks/useIntersect'
import Section4 from '@/Components/Sections/Section4'
import Section5 from '@/Components/Sections/Section5'

export default function Home() {
  const [currentScroll, setCurrentScroll] = useState<'Home' | ''>('Home')
  console.log(currentScroll)
  const [isHeaderShadow, setIsHeaderShadow] = useState(false)

  // const handleScroll = (e: UIEvent<HTMLDivElement>) => {
  //   console.log(e)
  // }

  const mainRef = useRef(null)

  const handleScroll = (): void => {
    if (window.scrollY >= 100) {
      setIsHeaderShadow(true)
    } else if (window.scrollY < 100) {
      setIsHeaderShadow(false)
    }
  }

  useScroll(() => handleScroll())

  const [targetRefs, isIntersecting] = useIntersect()

  const handleRef = (ref: React.RefObject<HTMLElement>) => {
    // DOM 요소를 targetRefs 배열에 추가합니다.
    if (ref && ref.current) {
      targetRefs.push(ref)
    }
  }
  console.log(isIntersecting)

  return (
    <main
      ref={mainRef}
      // onScroll={handleScroll}
      className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <Header isHeaderShadow={isHeaderShadow}></Header>
      <Section1 ref={handleRef} />
      <Section2 ref={handleRef} children={<GoTop></GoTop>} />
      <Section3 ref={handleRef} />
      <Section4 ref={handleRef} />
      <Section5 ref={handleRef} />
      <Footer></Footer>
    </main>
  )
}
