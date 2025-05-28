"use client"
import { ButtonType } from '@/utils/types'

const AButton = ({className, disabled, onClick, children} : ButtonType) => {
  return (
	<button className={`${className} relative overflow-hidden font-medium bg-transparent border-2 z-10 border-primary text-primary font-aldrich text-lg px-5 py-2 rounded-full hover:text-foreground duration-400 transition-all before:ease-[cubic-bezier(.01,-0.01,1,.62)] before:transition-all before:duration-400 before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0 before:bg-primary before:-z-10 before:w-0 before:h-full hover:before:w-full active:before:w-0`} disabled={disabled} onClick={onClick}>
	  {children}
	</button>
  )
}

export {AButton}