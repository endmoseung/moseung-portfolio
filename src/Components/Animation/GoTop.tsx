import React from 'react'
import { motion } from 'framer-motion'

interface GoTopProps {
  isAnimationVisible: boolean
  children: React.ReactElement
  className?: string
  isNoInitial?: boolean
}

const GoTop = ({
  isAnimationVisible,
  children,
  className,
  isNoInitial,
}: GoTopProps) => {
  return (
    <>
      {
        <motion.div
          className={`${className ? className : ''}`}
          initial={isNoInitial ? false : { opacity: 0, y: 100 }}
          animate={
            isAnimationVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
          }
          transition={{
            duration: 1,
            type: 'spring',
            delay: 0.1,
          }}
        >
          {children}
        </motion.div>
      }
    </>
  )
}

export default GoTop
