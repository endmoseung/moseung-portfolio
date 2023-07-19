import React from 'react'

interface HighlighterProps {
  children?: React.ReactElement | string
  className?: string
  size?: 'normal' | 'small'
}
/**
 *
 * @param children optional ReactElement나 string을 넣으면 됩니다.
 * @param className optional
 * @param size optional "normal"(default),"small"
 */
const Highlighter = ({
  children,
  className,
  size = 'normal',
}: HighlighterProps) => {
  return (
    <p
      className={`${className ? className : ''} block font-black ${
        size === 'normal' ? 'text-[18.75rem]' : 'text-[14.75rem]'
      } text-sub !opacity-50`}
    >
      {children}
    </p>
  )
}

export default Highlighter
