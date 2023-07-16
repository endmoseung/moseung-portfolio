import { useState, useEffect, useRef } from 'react'

type TargetRef = React.RefObject<HTMLElement>

const useIntersect = (): [TargetRef[], boolean[], (ref: TargetRef) => void] => {
  const targetRefs = useRef<TargetRef[]>([])
  const [isIntersecting, setIsIntersecting] = useState<boolean[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const intersectionStatus: boolean[] = []
        entries.forEach((entry, index) => {
          const isTargetIntersecting = entry.isIntersecting
          intersectionStatus[index] = isTargetIntersecting
        })
        setIsIntersecting(intersectionStatus)
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    )

    targetRefs.current.forEach((targetRef) => {
      if (targetRef.current) {
        observer.observe(targetRef.current)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const addTargetRef = (ref: TargetRef): void => {
    targetRefs.current.push(ref)
  }

  return [targetRefs.current, isIntersecting, addTargetRef]
}

export default useIntersect
