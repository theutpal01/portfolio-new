"use client"
import React from 'react'
import { Divider } from '@/components/ui/dividers'
import InfoSection from '@/components/views/sections/InfoSection'
import SkillsSection from '@/components/views/sections/SkillsSection'
import ContactSection from '@/components/views/sections/ContactSection'

const Info = () => {
	return (
		<div>
			<div id='info' className='py-5 w-full'>
				<h2 className='pb-2 text-primary text-base md:text-lg font-aldrich'>ABOUT ME</h2>
				<Divider />
				<div className='my-16'>
					<InfoSection />
				</div>
			</div>

			<div id='skills' className='py-5 w-full'>
				<h2 className='pb-2 text-primary text-base md:text-lg font-aldrich'>MY SKILLS</h2>
				<Divider />
				<div className='my-16'>
					<SkillsSection />
				</div>
			</div>
			
			<div id='contact' className='py-5 w-full'>
				<h2 className='pb-2 text-primary text-base md:text-lg font-aldrich'>CONTACT ME</h2>
				<Divider />
				<div className='my-16'>
					<ContactSection />
				</div>
			</div>
		</div>
	)
}

export default Info