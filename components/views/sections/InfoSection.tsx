import { AButton } from '@/components/ui/buttons'
import { Download } from '@deemlol/next-icons'
import {motion} from 'motion/react'
import Image from 'next/image'
import React from 'react'

const InfoSection = () => {
	const handleDownload = async () => {
		const response = await fetch("/res/Resume.pdf");
		const blob = await response.blob();
		const url = window.URL.createObjectURL(blob);

		const link = document.createElement("a");
		link.href = url;
		link.download = "Utpal_Resume.pdf";
		link.click();

		window.URL.revokeObjectURL(url);
  	};

	return (
		<div
			className='flex w-full flex-col lg:flex-row gap-5 justify-between overflow-hidden items-center'>
			<motion.div 
				initial={{opacity: 0, y: 80}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 0.3, delay: 0.1, ease: "easeIn"}}
				exit={{opacity: 0, y: 80}}
				className='w-full lg:w-1/2 flex items-center md:justify-center'>
				<Image src={"/images/me.png"} alt="Profile Picture" width={150} height={150} className='rounded-full w-full max-w-lg' />
			</motion.div>
			<motion.div 
				initial={{opacity: 0, x: 180}}
				whileInView={{opacity: 1, x: 0}}
				transition={{duration: 0.3, ease: "easeIn"}}
				exit={{opacity: 0, x: 180}}
				className='w-full lg:w-1/2 flex flex-col justify-center items-start'>
				<p className='font-nova-round text-sm md:text-lg text-primary'>
					I&apos;m a creative problem solver with a passion for building digital experiences that are both functional and visually engaging. I enjoy turning ideas into reality through thoughtful design and clean, effective code.<br />
					My work blends curiosity, creativity, and attention to detail — whether I&apos;m developing a website, designing a user interface, or learning something new. I&apos;m always eager to take on new challenges that help me grow and push the boundaries of what I can create.<br />
					Outside of tech, I love exploring new ideas, collaborating with others, and finding inspiration in art, design, and everyday experiences.<br />
					I&apos;m excited to connect with people who share a passion for creating meaningful things.
				</p>
				<AButton name='my resume' className='mt-5' onClick={handleDownload}>
					<div className='flex items-center justify-center font-nova-round text-sm md:text-xl'>
					<Download className='w-5 h-5 mr-2' />
					<p>Download CV</p>
					</div>
				</AButton>
			</motion.div>
		</div>
	)
}

export default InfoSection