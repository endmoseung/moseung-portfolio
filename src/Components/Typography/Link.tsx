import React from 'react'

interface LinkProps {
  children?: React.ReactElement | string
  href: string
  className?: string
}

const Link = ({ children, href, className }: LinkProps) => {
  return (
    <a
      style={{ borderBottom: '1px solid black' }}
      href={href}
      target="_blank"
      className={`${className ? className : ''} w-fit font-bold text-main`}
      rel="noreferrer"
    >
      {children}
    </a>
  )
}

export default Link
