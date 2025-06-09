import { AButton } from '@/components/ui/buttons'
import { Card } from '@/components/ui/cards'
import { LInput, LTextArea } from '@/components/ui/inputs'
import UnderlineLink from '@/components/ui/links'
import { Mail, Phone } from '@deemlol/next-icons'
import React from 'react'

const ContactSection = () => {
	const [formData, setFormData] = React.useState({
		name: '',
		email: '',
		message: ''
	})
	return (
		<div className='flex flex-col lg:flex-row gap-5 py-16 justify-end items-center'>
			<div className='w-full lg:w-7/12 flex flex-col gap-3 text-primary font-nova-round'>
				<h3 className='text-lg md:text-2xl font-bold'>Let&apos;s Connect</h3>

				<p className='text-sm md:text-lg text-wrap'>
					Whether you have an idea, a project, or just want to say hi — my inbox is always open.<br/>
					Feel free to reach out for freelance opportunities, collaborations, or tech talks. I&apos;ll try to respond as quickly as I can.
				</p>
				
				<ul className='mt-1 space-y-2 text-sm md:text-lg'>
					<li>
						<Mail className='inline-block mr-2' />
						<UnderlineLink href='mailto:work.theutpal@gmail.com'>work.theutpal@gmail.com</UnderlineLink>
					</li>
					<li>
						<Phone className='inline-block mr-2' />
						<UnderlineLink href='tel:+917451948191'>+91 745 194 8191</UnderlineLink>
					</li>
				</ul>
			</div>

			<div className='w-full self-center lg:w-5/12 flex flex-col justify-center items-end'>
				<Card className='h-fit !w-full max-w-md'>
					<LInput id='name' labelValue="Name" value={formData.name} type='text' placeholder='Enter Value' onChange={(e) => setFormData({...formData, name: e.target.value})} />
					<LInput id='email' labelValue="Email" value={formData.email} type='email' placeholder='Enter Value' onChange={(e) => setFormData({...formData, email: e.target.value})} />
					<LTextArea id='message' labelValue="Message" value={formData.message} type='textarea' placeholder='Enter Value' onChange={(e) => setFormData({...formData, message: e.target.value})} />
					<AButton name='submit-contact-form'>
						Submit
					</AButton>
				</Card>
			</div>
		</div>
	)
}

export default ContactSection