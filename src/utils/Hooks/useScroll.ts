import { useEffect } from 'react'

export const useScroll = (handleScroll: () => void) => {
  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener('scroll', handleScroll)
    }, 100)
    return () => {
      clearInterval(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}
