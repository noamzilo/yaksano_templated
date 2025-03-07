import React from 'react';
import Button from '../elements/Button';
import FitText from './FitText';

export default function BrandIcon() {
	return (
		<Button className="block w-full" type="link" href="/">
			<FitText minSize={24} maxSize={50}> {/* Increase minSize */}
				<span className="text-theme-blue font-medium whitespace-nowrap">
					Yaksano
					<span className="text-theme-purple">Software</span>
				</span>
			</FitText>
		</Button>
	);
}
