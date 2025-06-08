"use client"
import React from 'react'
import { Divider } from '@/components/ui/dividers'
import { Group, GroupButton } from '@/components/ui/buttons'
import InfoSection from '@/components/views/sections/InfoSection'
import SkillsSection from '@/components/views/sections/SkillsSection'
import ContactSection from '@/components/views/sections/ContactSection'

const Info = () => {
	const [active, setActive] = React.useState<"skills" | "info" | "contact">("info");

	const handleClick = (id: "skills" | "info" | "contact") => {
		setActive(id);
	}

	return (
		<div id='info' className='py-5 w-full'>
			<Group className='pt-5 h-fit'>
				{["info", "skills", "contact"].map((id) => (
					<GroupButton
						name={id + " button"}
						key={id}
						id={id}
						active={active}
						onClick={() => handleClick(id as "skills" | "info" | "contact")}
						className='font-aldrich text-sm'
					>
						{`${id.toUpperCase()}`}
					</GroupButton>
				))}
			</Group>
			<Divider />

			<div className='flex items-center justify-center self-center py-5 min-h-screen w-full'>
				{active === "info" && <InfoSection />}
				{active === "skills" && <SkillsSection />}
				{active === "contact" && <ContactSection />}
			</div>
		</div>
	)
}

export default Info