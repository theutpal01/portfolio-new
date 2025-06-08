import { CardGroupType } from '@/utils/types'
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
  return (
	<div className={`${className} flex flex-col gap-5 h-96 border-2 min-w-32 rounded-sm min-h-44 items-center text-primary font-nova-round justify-around p-4`}>
		{children}
	</div>
  )
}

export { CardGroup, Card }