import React from 'react'

interface ScrollTopInterface {
  dom: Element
}

const ScrollTop = ({ dom }: ScrollTopInterface) => {
  const handleClickTopButton = () => {
    dom.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <button
      onClick={handleClickTopButton}
      className=" cursor-pointer text-4xl fixed bottom-10 right-10 h-12  w-12 rounded-full bg-sub"
    >
      ↑
    </button>
  )
}

export default ScrollTop
