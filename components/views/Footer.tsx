import React from 'react'
import UnderlineLink from '../ui/links'
import { Divider } from '../ui/dividers'

const Label = ({className, text} : {className: string, text: string}) => {
	  return (
	<span className={`${className} bg-background border-2 border-primary rounded-full px-5 py-3 font-semibold text-lg text-primary`}>
		{text}
	</span>
  )
}

const Footer = () => {
  return (
	<footer className='flex flex-col gap-4'>
		<Divider />
		<div className='flex gap-5 font-aldrich text-primary text-xl items-center z-0'>
			<p>EXPLORE</p>

			<UnderlineLink href='/' className='font-nova-round'>Home</UnderlineLink>
			<UnderlineLink href='/' className='font-nova-round'>Work</UnderlineLink>
			<UnderlineLink href='/' className='font-nova-round'>Skills</UnderlineLink>
			<UnderlineLink href='/' className='font-nova-round'>About</UnderlineLink>
			<UnderlineLink href='/' className='font-nova-round'>Contact</UnderlineLink>
		</div>
		<div className='relative -z-10'>
			<h2 className='text-primary select-none text-center font-nova-round text-[24rem] leading-none'>
				Thanks
			</h2>

			<Label className='absolute font-aldrich z-0 left-1/12 bottom-2/12 -translate-3/4' text='Danke!' />
			<Label className='absolute font-aldrich z-0 left-2/12 bottom-6/12 -translate-x-1/4' text='Salamat!' />
			<Label className='absolute font-aldrich z-0 left-6/12 bottom-6/12 -translate-1/2' text='Arigato!' />
			<Label className='absolute font-aldrich z-0 left-8/12 bottom-1/12 -translate-1/2' text='Grasious!' />
			<Label className='absolute font-aldrich z-0 left-10/12 bottom-4/12 -translate-1/2' text='Merci!' />

		</div>
	</footer>
  )
}

export default Footer