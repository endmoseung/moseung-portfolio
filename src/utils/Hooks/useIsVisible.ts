import { useEffect } from 'react'
import useIntersection from './useIntersection'

const useIsVisible = (callbackFn: () => void, threshold?: number) => {
  const [targetRefs, isIntersecting] = useIntersection(
    threshold ? threshold : 0.7
  )

  useEffect(() => {
    if (!isIntersecting) {
      return
    }
    callbackFn()
  }, [isIntersecting])

  return targetRefs
}

export default useIsVisible
