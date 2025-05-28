import React from 'react'

const Divider = ({className} : {className?: string}) => {
  return (
		<div className={`w-full h-0.5 bg-primary ${className}`} />	
  )
}


const VDivider = ({className} : {className?: string}) => {
  return (
		<div className={`w-0.5 h-full bg-primary ${className}`} />	
  )
}



export {Divider, VDivider}