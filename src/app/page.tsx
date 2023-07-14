'use client'

import Section1 from '../Components/Sections/Section1'
import Header from '../Components/Header/Header'
import { useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [currentScroll, setCurrentScroll] = useState<'Home' | ''>('Home')
  console.log(currentScroll)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header></Header>
      <Section1></Section1>
    </main>
  )
}

Home.getInitialProps = async function () {
  const result = await axios.get('http://localhost:3000' + '/api/uuid/')
  return {
    label: 'UUID',
    uuid: result.data.uuid,
  }
}
