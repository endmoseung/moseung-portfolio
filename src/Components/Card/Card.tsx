import { CardType } from '@/types/card'
import React from 'react'
import { BiBulb } from 'react-icons/bi'

interface CardProps {
  cards: CardType
  index: number
  subTitle: string
}

const Card = ({ cards, index, subTitle }: CardProps) => {
  const { title, duration, details, links } = cards
  return (
    <div className="flex flex-col gap-2" key={index}>
      <p className="text-[2rem] font-bold text-main">{title}</p>
      <p>{duration}</p>
      <div className="flex flex-col gap-2">
        {details.map((detail, index: number) => (
          <div className="flex items-center" key={index}>
            <BiBulb className="mr-2" />
            <p className="leading-4">{detail}</p>
          </div>
        ))}
      </div>
      <p className="flex">{subTitle}</p>
      <div className="flex flex-col">
        {links.map((link, index: number) => (
          <a
            className="font-bold text-black underline"
            rel="noreferrer"
            target="_blank"
            key={index}
            href={link.link}
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Card
