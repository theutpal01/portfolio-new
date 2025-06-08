"use client"
import React, { useEffect } from 'react'

const useMousePos = () => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  function updateMousePos(e: MouseEvent) {
	setMousePos({
		x: e.clientX,
		y: e.clientY
	});
  };

  useEffect(() => {
	window.addEventListener('mousemove', updateMousePos);

	return () => {
		window.removeEventListener('mousemove', updateMousePos);
	}
  }, []);

  return mousePos;
}

export default useMousePos;