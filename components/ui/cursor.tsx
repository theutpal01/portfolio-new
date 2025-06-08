
"use client"
import useMousePos from '@/hooks/useMousePos'
import React from 'react'

const Cursor = () => {
	const mousePos = useMousePos();

	return (
		<div
      className={`flare z-[100] absolute bg-amber-500 rounded-full`}
      style={{
        // ...cursorStyle,
        left: `${mousePos.x}px`,
        top: `${mousePos.y}px`,
        width: `${10}px`,
        height: `${10}px`,
      }}
    ></div>
	)
}

export default Cursor