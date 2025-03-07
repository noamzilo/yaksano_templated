import React, { useEffect, useRef } from 'react';
import fitty from 'fitty';

export default function FitText({ children, minSize = 30, maxSize = 50 }) {
	const fitRef = useRef(null);

	useEffect(() => {
		if (!fitRef.current) return;
		// Initialize fitty with the new minSize and maxSize
		const fitInstance = fitty(fitRef.current, {
			minSize, // Increased from 12 to 20 for better visibility
			maxSize, // Stays at 50 to prevent overflow
		});

		// Cleanup
		return () => fitInstance.unsubscribe();
	}, [minSize, maxSize]);

	return (
		<div ref={fitRef} style={{ width: '100%' }}>
			{children}
		</div>
	);
}
