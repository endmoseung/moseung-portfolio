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
  return (
    <p
      className={`${className ? className : ''} block text-[8rem]
        font-black text-sub !opacity-50
      tablet:text-[6rem] mobile:text-[4rem]`}
    >
      {children}
    </p>
  )
}

export default Highlighter
