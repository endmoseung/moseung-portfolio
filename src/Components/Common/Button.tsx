import React from 'react'

interface ButtonProps {
  children?: React.ReactElement | string
  className?: string
}

const Button = ({ children, className }: ButtonProps) => {
  return (
    <div
      className={`${
        className ? className : ''
      } rounded-2xl bg-sub text-white py-[1.625rem] text-center`}
    >
      {children}
    </div>
  )
}

export default Button
