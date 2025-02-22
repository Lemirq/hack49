import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';

// https://github.com/shuding/cobe

export default function Cobe() {
	const canvasRef = useRef();

	useEffect(() => {
		let phi = 0;

		const globe = createGlobe(canvasRef.current, {
			devicePixelRatio: 2,
			width: 900 * 2,
			height: 900 * 2,
			phi: 0,
			theta: 0,
			dark: 1,
			diffuse: 1.2,
			mapSamples: 16000,
			mapBrightness: 6,
			baseColor: [0.388, 0.4, 0.945],
			markerColor: [0.1, 0.8, 1],
			glowColor: [1, 1, 1],
			markers: [
				// longitude latitude
				{ location: [40.7128, -74.006], size: 0.1 },
			],
			onRender: (state) => {
				// Called on every animation frame.
				// `state` will be an empty object, return updated params.
				state.phi = phi;
				phi += 0.01;
			},
		});

		return () => {
			globe.destroy();
		};
	}, []);

	return <canvas ref={canvasRef} style={{ width: 900, height: 900, maxWidth: '100%', aspectRatio: 1 }} />;
}
