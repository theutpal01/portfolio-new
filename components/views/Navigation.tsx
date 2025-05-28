"use client"
import Image from 'next/image'
import { AButton } from '../ui/buttons'

const Navigation = () => {
  return (
	<nav className='fixed top-0 left-0 w-full z-50 bg-transparent'>
		<div className="flex justify-between items-center p-8">
			<Image className='' src={'/images/logo.png'} alt="Logo" width={50} height={50} />
			<AButton disabled={false} onClick={() => console.log("Hello Navigation -")} >Menu</AButton>
		</div>
	</nav>
  )
}

export default Navigation