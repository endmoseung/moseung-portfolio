import { useEffect } from 'react'
import useIntersection from './useIntersection'

const useIsVisible = (callbackFn: () => void) => {
  const [targetRefs, isIntersecting] = useIntersection(0.7)

  useEffect(() => {
    if (!isIntersecting) {
      return
    }
    callbackFn()
  }, [isIntersecting])

  return targetRefs
}

export default useIsVisible
