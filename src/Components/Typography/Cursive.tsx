import React from 'react'
import { Nanum_Brush_Script } from 'next/font/google' // 해당 폰트의 함수를 사용합니다.

interface CursiveProps {
  children?: React.ReactElement | string
  className?: string
}

const PermanentMarker = Nanum_Brush_Script({
  weight: '400',
  subsets: ['latin'],
})

const Cursive = ({ children, className }: CursiveProps) => {
  return (
    <p className={`${className ? className : ''}${PermanentMarker.className}`}>
      {children}
    </p>
  )
}

export default Cursive
