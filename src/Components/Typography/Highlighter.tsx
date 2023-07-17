import React from 'react'

interface HighlighterProps {
  children?: React.ReactElement | string
  className?: string
}

const Highlighter = ({ children, className }: HighlighterProps) => {
  return (
    <p
      className={`${
        className ? className : ''
      } font-black block text-[18.75rem] text-sub !opacity-50`}
    >
      {children}
    </p>
  )
}

export default Highlighter
