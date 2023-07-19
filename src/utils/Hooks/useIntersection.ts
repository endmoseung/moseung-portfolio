import { useEffect, useRef, useState } from 'react'

const useIntersection = (
  threshold: number = 0.15
): [React.RefObject<HTMLDivElement>, boolean] => {
  const targetRef = useRef<HTMLDivElement>(null)
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: '0px',
        threshold,
      }
    )

    if (targetRef.current) {
      observer.observe(targetRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return [targetRef, isIntersecting]
}

export default useIntersection
