import React from 'react';
import Button from '../elements/Button';
import FitText from './FitText';

export default function BrandIcon({minSize=25, maxSize=50}) {
	return (
		<Button className="block w-full" type="link" href="/">
			<FitText minSize={minSize} maxSize={maxSize}> {/* Increase minSize */}
				<span className="text-theme-blue font-medium whitespace-nowrap">
					Yaksano
					<span className="text-theme-purple">Software</span>
				</span>
			</FitText>
		</Button>
	);
}
