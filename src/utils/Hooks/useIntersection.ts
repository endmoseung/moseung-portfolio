import { useEffect, useRef, useState } from 'react'

const useIntersection = (): [React.RefObject<HTMLDivElement>, boolean] => {
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
        threshold: 0.1, // 돔 요소의 50% 이상이 화면에 보일 때 작동합니다.
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
