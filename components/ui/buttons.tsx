"use client"
import { ButtonType, GroupButtonType } from '@/utils/types'
import { ReactNode } from 'react'

const AButton = ({className, type = "button", name, color = "primary", disabled, onClick, children} : ButtonType) => {

	const colors = {
	primary: "border-primary text-primary hover:text-foreground before:bg-primary",
	secondary: "border-secondary text-secondary hover:text-foreground before:bg-secondary",
	white: "border-white text-white hover:text-black before:bg-white",
	disabled: "border-gray-400 text-gray-400 cursor-not-allowed before:bg-gray-400",
	}

  return (
	<button type={type} name={name} aria-label={name} className={`${className} ${disabled ? colors.disabled : colors[color]} relative cursor-pointer overflow-hidden font-medium md:font-semibold bg-transparent border-2 z-10 font-aldrich text-lg px-5 py-2 rounded-full duration-300 transition-all ${!disabled ? 'before:ease-[cubic-bezier(.01,-0.01,1,.62)] before:transition-all before:duration-200 before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0 before:-z-10 before:w-0 before:h-full hover:before:w-full active:before:w-0' : null}`} disabled={disabled} onClick={onClick}>
	  {children}
	</button>
  )
}


const Group = ({className, children} : {className?: string, children: ReactNode}) => {
	return (
		<div className={`${className} flex w-fit`}>
			{children}
		</div>
	)
}

const GroupButton = ({className, name, id, color = "primary", disabled, active, onClick, children} : GroupButtonType) => {
	const colors = {
		primary: `bg-transparent ${ active === id ? "border-primary" : "border-transparent"} text-primary`,
		secondary: `bg-transparent ${ active === id ? "border-secondary" : "border-transparent"} text-secondary`,
		white: `bg-transparent ${ active === id ? "border-white" : "border-transparent"} text-white`,
	}
	return (
		<button name={name} id={id} className={`${className} ${colors[color]} cursor-pointer relative border-x-2 border-t-2 p-2 min-w-24`} disabled={disabled} onClick={onClick}>
			{children}
		</button>
	)
}

export {AButton, Group, GroupButton}