import React from 'react'
import Highlighter from '../Typography/Highlighter'
import Cursive from '../Typography/Cursive'
import Button from '../Common/Button'
import { WORK } from '@/utils/Constant/Constant'

interface Section3Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any
}

const Section3 = ({ ref }: Section3Props) => {
  return (
    <div ref={ref} className=" relative pt-[10.5rem]">
      <div>
        {WORK.map((work, index: number) => (
          <div key={index}>
            <Cursive>{work.description}</Cursive>
            <Button>{work.buttonTitle}</Button>
          </div>
        ))}
      </div>
      <Highlighter className={' absolute top-0 right-[-20px]'}>
        Work
      </Highlighter>
    </div>
  )
}

export default Section3
