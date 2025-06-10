import React from 'react'
import { Divider } from '../ui/dividers'

import Project from './Project'
import { featuredWork } from '@/constants/data'

const FeaturedWork = () => {
  return (
		<div id='work' className='py-5 w-full min-h-screen'>
			<h2 className='pb-2 text-primary text-base md:text-lg font-aldrich'>FEATURED WORK</h2>
			<Divider />
			{featuredWork.map((work, index) => (
				<div key={index}>
				<Project
					key={index}
					title={work.title}
					description={work.description}
					image={work.image}
					github_url={work.github_url}
					site_url={work.site_url}
				/>
				<Divider key={`divider-${index}`} className='my-5' />
				</div>
			))}
			<div className='flex justify-between'>
				<p className='text-primary text-[1.5rem] md:text-[3rem] font-nova-round'>
					MORE WORK COMING SOON
				</p>
			</div>
			<Divider className='mb-8 mt-5' />
		</div>
  )
}

export default FeaturedWork