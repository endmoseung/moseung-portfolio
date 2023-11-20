import React from 'react'

interface LinkProps {
  children?: React.ReactElement | string
  href: string
}

const Link = ({ children, href }: LinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="font-bold underline decoration-main"
      rel="noreferrer"
    >
      {children}
    </a>
  )
}

export default Link
