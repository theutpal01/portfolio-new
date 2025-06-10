import React from 'react'

const Hero = () => {
  return (
	<div id='home' className='flex w-full flex-col min-h-screen self-center justify-center items-center'>
		<div className='h-fit w-fit select-none'>
			<p className='leading-none pl-1 lg:pl-2 text-primary text-2xl md:text-4xl font-aldrich font-medium'>Hi I&apos;m,</p>
			<p className='pt-1 font-monoton text-left px-0 text-primary text-[5rem] sm:text-[10rem] md:text-[11rem] lg:text-[15rem] xl:text-[18rem] leading-none drop-shadow-primary drop-shadow-xl'>UTPAL</p>
			<p className='pt-2 md:pt-5 text-primary pl-1 lg:pl-2 text-sm md:text-xl font-nova-round'>I design and build immersive digital experiences for the modern web.</p>
			<p className='text-primary pl-1 lg:pl-2 text-sm md:text-xl font-nova-round'>Let&apos;s create something extraordinary together.</p>
		</div>
	</div>
  )
}

export default Hero