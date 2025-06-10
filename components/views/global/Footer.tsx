"use client"
import React from 'react'
import UnderlineLink from '@/components/ui/links'
import { Divider } from '@/components/ui/dividers'
import { smoothScrollToId } from '@/utils/helpers'
import {motion} from 'framer-motion'

const Label = ({className, text} : {className: string, text: string}) => {
	return (
		<motion.span
			initial={{ opacity: 0, y: 70 }}
			exit={{ opacity: 0, y: 70 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: 'easeInOut' }}
			className={`${className} bg-background hidden md:block border-2 border-primary rounded-full px-5 py-3 font-semibold text-xs md:text-sm lg:text-base xl:text-lg text-primary`}>
			{text}
		</motion.span>
  	)
}

const Footer = () => {
  return (
	<footer className='flex flex-col gap-4'>
		<Divider />
		<motion.div 
			initial={{ opacity: 0, x: -250 }}
			exit={{ opacity: 0, y: -250 }}
			transition={{ duration: 0.5, ease: 'easeInOut' }}
			whileInView={{ opacity: 1, x: 0 }}
			className='flex flex-col md:flex-row gap-5 gap-y-3 font-aldrich text-primary text-sm md:text-xl md:items-center z-0'>
			<p className='text-base md:text-lg'>EXPLORE</p>
			<div className='flex gap-x-5'>
			<UnderlineLink href='/' className='font-nova-round' onClick={() => smoothScrollToId("home")}>Home</UnderlineLink>
			<UnderlineLink href='/' className='font-nova-round' onClick={() => smoothScrollToId("work")} >Work</UnderlineLink>
			<UnderlineLink href='/' className='font-nova-round' onClick={() => smoothScrollToId("info")}>About Me</UnderlineLink>
			{/* <UnderlineLink href='/' className='font-nova-round'>Skills</UnderlineLink> */}
			{/* <UnderlineLink href='/' className='font-nova-round'>Contact</UnderlineLink> */}
			</div>
		</motion.div>
		<div id="trigger-end" className='relative -z-10 flex justify-center w-fit self-center'>
			<motion.h2
				initial={{ opacity: 0, y: 50 }}
				exit={{ opacity: 0, y: 50 }}
				transition={{ duration: 0.3, ease: 'easeInOut' }}
				whileInView={{ opacity: 1, y: 0 }} 
				className='text-primary select-none text-center font-nova-round text-[7rem] sm:text-[11rem] md:text-[13rem] lg:text-[17rem] xl:text-[20rem] leading-none'>
				Thanks
			</motion.h2>

			<Label className='absolute font-aldrich z-0 left-1/12 bottom-2/12 -translate-3/4' text='Danke!' />
			<Label className='absolute font-aldrich z-0 left-2/12 bottom-6/12 -translate-x-3/12' text='Salamat!' />
			<Label className='absolute font-aldrich z-0 left-6/12 bottom-6/12 -translate-1/2' text='Arigato!' />
			<Label className='absolute font-aldrich z-0 left-8/12 bottom-1/12 -translate-1/2' text='Grasious!' />
			<Label className='absolute font-aldrich z-0 left-10/12 bottom-4/12 -translate-1/2' text='Merci!' />

		</div>
	</footer>
  )
}

export default Footer