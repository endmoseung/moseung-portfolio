import React from 'react'
import { motion } from 'framer-motion'

interface GoTopProps {
  isAnimationVisible: boolean
  children: React.ReactElement
  className?: string
}

const GoTop = ({ isAnimationVisible, children, className }: GoTopProps) => {
  console.log(isAnimationVisible)
  return (
    <>
      {
        <motion.div
          className={`${className ? className : ''}`}
          initial={{ opacity: 0, y: 100 }}
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
