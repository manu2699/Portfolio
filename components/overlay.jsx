import { useEffect, useRef, useState } from "react";

export const BGOverlayComponent = () => {
	const [coord, setCoords] = useState({ x: 0, y: 0 });
	const bgOverlayRef = useRef(null);

	useEffect(function onLoad() {
		window.addEventListener("mousemove", handleMouseMove);
	}, []);

	function handleMouseMove(e) {
		if (bgOverlayRef.current) {
			requestAnimationFrame(() => {
				setCoords({ x: e.x, y: e.y });
			});
			// setCoords({ x: e.x, y: e.y });
			// console.log({ x: e.x, y: e.y });
			// bgOverlayRef.current.style.background = `radial-gradient(600px at ${e.x}px ${e.y}px, rgba(29, 78, 216, 0.15), transparent 80%);`;
		}
	}

	return (
		<div
			className='bgOverlay'
			ref={bgOverlayRef}
			onMouseMove={handleMouseMove}
			style={{
				background: `radial-gradient(450px at ${coord.x}px ${coord.y}px, var(--primary-bg-10), transparent 90%)`
			}}
		/>
	);
};
