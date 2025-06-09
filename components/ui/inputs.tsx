import { InputType } from '@/utils/types'
import React from 'react'

const LInput = ({id, labelValue, labelClass, inputClass, value, type, placeholder, disabled = false, onChange, onClick} : InputType) => {
  return (
	<div className='flex flex-col w-full gap-2 min-w-xs sm:min-w-sm'>
		<label className={`${labelClass}`} htmlFor={id}>{labelValue}</label>
		<input className={`${inputClass} w-full  p-3 mb-3 border border-primary focus:outline-none focus:ring-2 focus:ring-primary`} id={id} name={id} type={type} value={value} disabled={disabled} placeholder={placeholder} onChange={onChange} onClick={onClick} />
	</div>
  )
}

const LTextArea = ({id, labelValue, labelClass, inputClass, value, placeholder, disabled = false, onChange, onClick} : InputType) => {
  return (
	<div className='flex flex-col w-full min-w-xs sm:min-w-sm'>
		<label className={`${labelClass}`} htmlFor={id}>{labelValue}</label>
		<textarea className={`${inputClass} w-full p-2 mb-3 border border-primary focus:outline-none focus:ring-2 focus:ring-primary`} id={id} name={id} value={value} disabled={disabled} placeholder={placeholder} onChange={onChange} onClick={onClick} />
	</div>
  )
}

export {LInput, LTextArea}