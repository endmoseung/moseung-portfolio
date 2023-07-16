import React from 'react'
import { motion } from 'framer-motion'

interface GoTopProps {
  isAnimationVisible: boolean
}

const GoTop = ({ isAnimationVisible }: GoTopProps) => {
  return (
    // <motion.p
    //   initial={{ opacity: 0, y: 100 }}
    //   animate={
    //     isAnimationVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
    //   }
    //   transition={{
    //     duration: 1,
    //     type: 'spring',
    //     delay: 0.1,
    //   }}
    //   className=" font-black block text-[18.75rem] text-sub !opacity-50"
    // >
    //   Skills
    // </motion.p>
    <p
      // initial={{ opacity: 0, y: 100 }}
      // animate={
      //   isAnimationVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
      // }
      // transition={{
      //   duration: 1,
      //   type: 'spring',
      //   delay: 0.1,
      // }}
      className=" font-black block text-[18.75rem] text-sub !opacity-50"
    >
      Skills
    </p>
  )
}

export default GoTop
