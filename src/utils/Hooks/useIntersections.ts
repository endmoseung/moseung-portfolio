import { useEffect, useState } from 'react'
const useIntersections = (
  elementsRef: (React.RefObject<HTMLDivElement> | null)[]
) => {
  // 각 ref의 교차 상태를 배열로 관리합니다. 초기 상태는 모두 false입니다.
  const [isIntersecting, setIsIntersecting] = useState(
    elementsRef.map(() => false)
  )
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = elementsRef.findIndex(
          (ref) => ref?.current === entry.target
        )
        if (index !== -1) {
          setIsIntersecting((prev) =>
            prev.map((value, i) => (i === index ? entry.isIntersecting : value))
          )
        }
      })
    })
    elementsRef.forEach((ref) => {
      if (ref?.current) {
        observer.observe(ref?.current)
      }
    })
    return () => {
      elementsRef.forEach((ref) => {
        if (ref?.current) {
          observer.unobserve(ref?.current)
        }
      })
    }
  }, [])
  return [elementsRef, isIntersecting]
}
export default useIntersections
