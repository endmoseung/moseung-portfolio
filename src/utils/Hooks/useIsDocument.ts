import { useEffect, useState } from 'react'

const useIsDocument = () => {
  const [isDocument, setIsDocument] = useState(false)

  useEffect(() => {
    setIsDocument(true)
  }, [])
  return isDocument
}

export default useIsDocument
