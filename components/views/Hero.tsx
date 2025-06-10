"use client"
import {motion} from 'motion/react'
import React from 'react'

const Hero = () => {
  return (
	<div id='home' className='flex w-full flex-col min-h-screen self-center justify-center items-center'>
		<div className='h-fit w-fit select-none'>
			<motion.p 
			initial={{ opacity: 0, x: -100 }}
			whileInView={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -100 }}
			transition={{ duration: 0.5, delay: 0.1 }}
			viewport={{ once: true }}
			className='leading-none pl-1 lg:pl-2 text-primary text-2xl md:text-4xl font-aldrich font-medium'>Hi I&apos;m,</motion.p>
			<motion.p 
			className='pt-1 font-monoton text-left px-0 text-primary text-[5rem] sm:text-[10rem] md:text-[11rem] lg:text-[12rem] xl:text-[18rem] leading-none drop-shadow-primary drop-shadow-lg'>
				<motion.span 
				style={{ display: 'inline-block', opacity: 0 }}
				animate={{opacity: 1, scaleX: [1, 1.1, 1]}}
				whileHover={{ skewY: 12, transition: { duration: 0.3, delay: 0 } }}
				transition={{ duration: 0.5}}
				>U</motion.span>
				<motion.span 
				style={{ display: 'inline-block', opacity: 0 }}
				animate={{opacity: 1, scaleY: [1, 1.3, 1.05]}}
				whileHover={{ skewY: -15, transition: { duration: 0.3, delay: 0 } }}
				transition={{ duration: 0.5, delay: 0.3 }}
				>T</motion.span>
				<motion.span 
				style={{ display: 'inline-block', opacity: 0 }}
				animate={{opacity: 1, scale: [1, 1.2, 1]}}
				whileHover={{ skewX: -10, transition: { duration: 0.3, delay: 0 } }}
				transition={{ duration: 0.5, delay: 0.6 }}
				>P</motion.span>
				<motion.span 
				style={{ display: 'inline-block', opacity: 0 }}
				animate={{opacity: 1, scale: [1, 0.5, 1], rotate: [0, 370]}}
				whileHover={{ skewX: 10, transition: { duration: 0.3, delay: 0 } }}
				transition={{ duration: 0.5, delay: 0.9 }}
				>A</motion.span>
				<motion.span 
				style={{ display: 'inline-block', opacity: 0 }}
				animate={{opacity: 1, scale: [1, 0.5, 1], rotate: [360, 0]}}
				whileHover={{ skewX: 10, transition: { duration: 0.3, delay: 0 } }}
				transition={{ duration: 0.6, delay: 1.2 }}
				>L</motion.span>
			</motion.p>
			<motion.p 
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 50 }}
			transition={{ duration: 0.5, delay: 0.35 }}
			viewport={{ once: true }}
			className='pt-2 md:pt-5 text-primary pl-1 lg:pl-2 text-sm md:text-xl font-nova-round'>
				I design and build immersive digital experiences for the modern web.
				<br/>Let&apos;s create something extraordinary together.
			</motion.p>
		</div>
	</div>
  )
}

export default Hero