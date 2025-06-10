import { CardGroupType } from '@/utils/types'
import {motion} from "motion/react"
import React from 'react'

const CardGroup = ({className, title, children} : CardGroupType) => {
  return (
	<div className={`${className} flex flex-col items-center md:items-start justify-center w-full mb-5`}>
		{title && (
			<h2 className='text-lg md:text-2xl font-bold text-primary font-aldrich mb-4'>
				{title}
			</h2>
		)}
		<div className='flex gap-4 flex-wrap justify-center md:justify-start'>
			{children}
		</div>
	</div>
  )
}

const Card = ({className, children} : {className?: string, children: React.ReactNode}) => {
	// number between 0.1 to 0.3 uising random



	const delay = (Math.random() * 0.2) + 0.1;
  return (
	<motion.div 
		initial={{opacity: 0, y: 30}}
		whileInView={{opacity: 1, y: 0}}
		whileHover={{scale: 1.1 }}
		exit={{opacity: 0, y: 30}}
		transition={{duration: 0.2, delay, ease: "easeIn"}}
		className={`${className} flex flex-col gap-5 h-96 border-2 bg-primary/5 backdrop-blur-2xl min-w-32 rounded-sm min-h-44 items-center text-primary font-nova-round justify-around p-4`}>
		{children}
	</motion.div>
  )
}

export { CardGroup, Card }