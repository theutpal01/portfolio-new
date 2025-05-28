import React from 'react'

const HeroSection = () => {
  return (
	<div className='flex w-full flex-col min-h-screen justify-center items-center'>
		<div className='h-fit w-fit select-none'>
			<h3 className='leading-none pl-2 text-primary text-4xl font-aldrich font-medium'>Hi I&apos;m,</h3>
			<h1 className='font-monoton text-left px-0 text-primary text-[18rem] leading-none drop-shadow-lg drop-shadow-primary'>UTPAL</h1>
			<p className='pt-5 text-primary pl-2 text-xl font-nova-round'>I design and build immersive digital experiences for the modern web.</p>
			<p className='text-primary pl-2 text-xl font-nova-round'>Let&apos;s create something extraordinary together.</p>
		</div>
	</div>
  )
}

export default HeroSection