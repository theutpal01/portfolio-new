import { Card, CardGroup } from '@/components/ui/cards'
import { skills } from '@/constants/data'
import Image from 'next/image'
import React from 'react'

const SkillsSection = () => {
  return (
	<div className='flex flex-col gap-5 items-center justify-center w-full'>
		
		<CardGroup title='Languages'>
			{skills.languages.map((skill, index) => (
				<Card key={index} className='h-fit'>
					<Image src={skill.imagePath} alt={skill.alt} width={100} height={100} className='w-20 h-20' />
					<p>{skill.name}</p>	
				</Card>
			))}
		</CardGroup>

		<CardGroup title='Frontend'>
			{skills.frontend.map((skill, index) => (
				<Card key={index} className='h-fit'>
					<Image src={skill.imagePath} alt={skill.alt} width={100} height={100} className='w-20 h-20' />
					<p>{skill.name}</p>	
				</Card>
			))}
		</CardGroup>

		<CardGroup title='Backend'>
			{skills.backend.map((skill, index) => (
				<Card key={index} className='h-fit'>
					<Image src={skill.imagePath} alt={skill.alt} width={100} height={100} className='w-20 h-20' />
					<p>{skill.name}</p>	
				</Card>
			))}
		</CardGroup>

		{/* <CardGroup title='Game Development'>
			{skills.game.map((skill, index) => (
				<Card key={index} className='h-fit'>
					<Image src={skill.imagePath} alt={skill.alt} width={100} height={100} className='w-20 h-20' />
					<p>{skill.name}</p>	
				</Card>
			))}
		</CardGroup> */}

		{/* <CardGroup title='Design'>
			{skills.design.map((skill, index) => (
				<Card key={index} className='h-fit'>
					<Image src={skill.imagePath} alt={skill.alt} width={100} height={100} className='w-20 h-20' />
					<p>{skill.name}</p>	
				</Card>
			))}
		</CardGroup> */}

		<CardGroup title='Tools & Technologies'>
			{skills.tools.map((skill, index) => (
				<Card key={index} className='h-fit'>
					<Image src={skill.imagePath} alt={skill.alt} width={100} height={100} className='w-20 h-20' />
					<p>{skill.name}</p>	
				</Card>
			))}
		</CardGroup>
	</div>
  )
}

export default SkillsSection