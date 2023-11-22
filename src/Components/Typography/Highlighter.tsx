import useDevice from '@/utils/Hooks/useDevice'
import React from 'react'

interface HighlighterProps {
  children?: React.ReactElement | string
  className?: string
}
/**
 *
 * @param children optional ReactElement나 string을 넣으면 됩니다.
 * @param className optional
 */
const Highlighter = ({ children, className }: HighlighterProps) => {
  const pc = useDevice('pc')
  const tablet = useDevice('tablet')
  return (
    <p
      className={`${className ? className : ''} block font-black ${
        pc ? 'text-[18.75rem]' : tablet ? 'text-[14.75rem]' : 'text-[8rem]'
      } text-sub !opacity-50`}
    >
      {children}
    </p>
  )
}

export default Highlighter
