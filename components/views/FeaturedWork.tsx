import React from 'react'
import { Divider } from '../ui/dividers'

import Project from './Project'
import { featuredWork } from '@/constants/work'

const FeaturedWork = () => {
  return (
	<div>
		<div className='my-5'>
			<h2 className='pb-2 text-primary text-lg font-aldrich'>FEATURED WORK</h2>
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
			<h2 className='text-primary text-[3rem] font-nova-round'>MORE WORKS COMING SOON</h2>
		</div>
	</div>
  )
}

export default FeaturedWork