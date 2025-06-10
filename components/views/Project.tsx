"use client"
import { AButton } from '@/components/ui/buttons'
import UnderlineLink from '@/components/ui/links'
import { motion } from 'motion/react'
import { ExternalLink } from '@deemlol/next-icons'
import Image from 'next/image'
import { ProjectType } from '@/utils/types'

const Project = ({title, image, description, github_url, site_url} : ProjectType) => {
	return (
		<motion.div 
			initial={{opacity: 0, y: 80}}
			whileInView={{opacity: 1, y: 0}}
			transition={{duration: 0.3, ease: "easeIn"}}
			exit={{opacity: 0, y: 80}}
			className='w-full flex flex-col lg:flex-row py-5 gap-5'>
			<div className='w-full lg:w-7/12 flex justify-start group overflow-hidden rounded-lg'>
				<Image
					src={image}
					alt='Featured Work'
					width={700}
					height={300}
					className='shadow-lg w-full max-h-96 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out'
				/>
			</div>
			<div className='w-full lg:w-5/12 flex flex-col justify-between gap-5'>
				<div className='flex flex-col gap-3'>
					<h3 className='text-primary text-xl md:text-2xl font-nova-round font-bold'>{title}</h3>
					<p className='text-primary text-sm md:text-lg font-nova-round line-clamp-7'>
						{description}
					</p>
				</div>
				<div className='flex gap-5 items-center'>
					<AButton name='github redirect' onClick={() => window.open(github_url, '_blank')} className=' !text-sm md:!text-base'>Github Repo</AButton>
					<UnderlineLink className='flex items-center gap-2 text-primary font-nova-round' href={site_url} target='_blank'>
					<p>Visit Site</p>
					<ExternalLink className='size-5' />
					</UnderlineLink>
				</div>

			</div>

		</motion.div>
	)
}

export default Project