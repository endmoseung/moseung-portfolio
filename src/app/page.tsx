'use client'

import Section1 from '@/Components/Sections/Section1'
import Header from '@/Components/Header/Header'
import { useState } from 'react'
import axios from 'axios'
import Section2 from '@/Components/Sections/Section2'
import Section3 from '@/Components/Sections/Section3'
import Footer from '@/Components/Footer/Footer'

export default function Home() {
  const [currentScroll, setCurrentScroll] = useState<'Home' | ''>('Home')
  console.log(currentScroll)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header setCurrentScroll={setCurrentScroll}></Header>
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer></Footer>
    </main>
  )
}
