import { AlertType, AlertWrapperType } from '@/utils/types'
import { AlertCircle, AlertTriangle, CheckCircle, X, XCircle } from '@deemlol/next-icons';
import {motion} from 'motion/react';
import React from 'react'



const AlertWrapper = (
	{children, className = "", horizontal = "right", vertical = "bottom"} : AlertWrapperType) => {
	const positionClass = `${vertical}-0 ${horizontal}-0`;

	return (
		<div className={`${className} z-[200] fixed ${positionClass} flex flex-col gap-3 w-full m-3 sm:max-w-sm`}>
			{children}
		</div>
	)
}


const Alert = ({type = "info", message, delay, show, onClose} : AlertType) => {

	const alertClasses = {
		success: 'border-success bg-success/10 text-success',
		error: 'border-error bg-error/10 text-error',
		info: 'border-info bg-info/10 text-info',
		warning: 'border-warning bg-warning/10 text-warning',
	}[type];

	const loaderClasses = {
		success: 'bg-success',
		error: 'bg-red-500',
		info: 'bg-blue-500',
		warning: 'bg-yellow-500',
	}[type];

	return show ?
		(
			<motion.div
				initial={{ x: '100%', opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				exit={{ x: '100%', opacity: 0 }}
				transition={{ duration: 0.1, ease: 'circOut'}}
			 	className={`${alertClasses} ${show ? 'w-full' : 'w-0'} duration-300 flex justify-between border-2 rounded-sm overflow-hidden p-3 backdrop-blur-3xl`}>
		
				<motion.div
					initial={{ width: '100%' }}
					animate={{ width: '0%' }}
					transition={{ duration: delay, ease: 'linear' }}
					className={`${loaderClasses} absolute rounded-b-full bottom-0 left-0 h-1 w-full`} />
				
				<div className='flex gap-2'>
					{type === "info" && <AlertCircle className="w-6 h-6 text-current" />}
					{type === "warning" && <AlertTriangle className="w-6 h-6 text-current" />}
					{type === "success" && <CheckCircle className="w-6 h-6 text-current" />}
					{type === "error" && <XCircle className="w-6 h-6 text-current" />}
					<p className="flex-grow">{message}</p>
				</div>
				<button onClick={onClose} className="text-sm cursor-pointer active:scale-90">
					<X className="w-6 h-6" />
				</button>
			</motion.div>
		) : null;
}

export {AlertWrapper, Alert};