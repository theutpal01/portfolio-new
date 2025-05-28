"use client"
import { AButton } from '../ui/buttons'
import UnderlineLink from '../ui/links'
import { ExternalLink } from '@deemlol/next-icons'
import Image from 'next/image'
import { ProjectType } from '@/utils/types'

const Project = ({title, image, description, github_url, site_url} : ProjectType) => {
  return (
	<div className='w-full flex py-5 gap-5'>
				<div className='w-7/12 flex justify-start'>
					<Image
						src={image}
						alt='Featured Work'
						width={700}
						height={300}
						className='rounded-lg shadow-lg w-full max-h-96 object-cover'
					/>
				</div>
				<div className='w-5/12 flex flex-col justify-between'>
					<div className='flex flex-col gap-3'>
						<h3 className='text-primary text-2xl font-nova-round font-bold'>{title}</h3>
						<p className='text-primary text-lg font-nova-round line-clamp-4'>
							{description}
						</p>
					</div>
					<div className='flex gap-5 items-center'>
						<AButton onClick={() => window.open(github_url, '_blank')} className='!text-base'>Github Repo</AButton>
						<UnderlineLink className='flex gap-2 text-primary font-nova-round' href={site_url} target='_blank'>
						<p>Visit Site</p>
						<ExternalLink className='inline-block' />
						</UnderlineLink>
					</div>

				</div>

			</div>
  )
}

export default Project