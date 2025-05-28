import { LinkType } from '@/utils/types'
import Link from 'next/link'
import React from 'react'

const UnderlineLink = ({className, href, target = "_parent", children} : LinkType) => {
  return (
	<div className='inline-block relative'>
		<Link href={href} target={target} className={`${className} after:content-[""] after:bg-primary after:absolute after:w-0 hover:after:w-full after:transition-all after:ease-[cubic-bezier(.01,-0.01,1,.62)] after:duration-200 after:bottom-0 after:left-0 after:translate-y-1/2 after:h-0.5`}>
		{children}
		</Link>
	</div>
  )
}

export default UnderlineLink