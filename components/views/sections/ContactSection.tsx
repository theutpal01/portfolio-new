import { AButton } from '@/components/ui/buttons'
import { LInput, LTextArea } from '@/components/ui/inputs'
import UnderlineLink from '@/components/ui/links'
import { Mail, Phone } from '@deemlol/next-icons'
import React from 'react'

const ContactSection = () => {
	const [loading, setLoading] = React.useState(false)
	const [formData, setFormData] = React.useState({
		name: '',
		email: '',
		message: ''
	})

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setLoading(true);
		console.log(loading);
		
		if (!formData.name || !formData.email || !formData.message) {
			alert('Please fill in all fields.')
			return
		}
		
		if (!/\S+@\S+\.\S+/.test(formData.email)) {
			alert('Please enter a valid email address.')
			return
		}

		const res = await fetch('/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		});

		const respose = await res.json();

		if (!respose.success) {
			alert('There was an error submitting the form. Please try again later.')
			setLoading(false)
			return
		}

		setLoading(false)
		alert('Thank you for reaching out! I will get back to you soon.')
		setFormData({ name: '', email: '', message: '' });
	}

	return (
		<div className='flex flex-col lg:flex-row gap-16 py-16 justify-end items-center'>
			<div className='w-full lg:w-1/2 flex flex-col gap-3 text-primary font-nova-round'>
				<h3 className='text-lg md:text-2xl font-bold mb-8'>Let&apos;s Connect</h3>

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

			<div className='w-full self-center lg:w-1/2 flex flex-col justify-center items-center lg:items-end'>
				<form className='flex flex-col gap-3 p-5 rounded-md border-2 drop-shadow text-primary' onSubmit={handleSubmit} >
					<LInput id='name' labelValue="Name" value={formData.name} type='text' placeholder='Enter Value' onChange={(e) => setFormData({...formData, name: e.target.value})} />
					<LInput id='email' labelValue="Email" value={formData.email} type='email' placeholder='Enter Value' onChange={(e) => setFormData({...formData, email: e.target.value})} />
					<LTextArea id='message' labelValue="Message" value={formData.message} type='textarea' placeholder='Enter Value' onChange={(e) => setFormData({...formData, message: e.target.value})} />
					<AButton type='submit' name='submit-contact-form' className='w-fit self-center'>
						Submit
					</AButton>
				</form>
			</div>
		</div>
	)
}

export default ContactSection