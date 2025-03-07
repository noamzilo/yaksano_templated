import React from 'react';
import BrandIcon from './BrandIcon';

export default function Footer() {
	return (
		<div className="bg-gray-50 border-t border-gray-200 pb-6">
			<div className="container mx-auto">
				<div className="flex flex-col sm:flex-row mt-8 justify-center">
					<div className="w-1/3 ml-16 mr-8">
						{/* Limit width so Fitty knows the available space */}
						<div className="max-w-sm sm:max-w-md lg:max-w-lg">
							<BrandIcon minSize={25} maxSize={50} />
						</div>
						<p className="text-lg text-gray-400 font-light mt-2">
							Growing Your Business
							<br />
							Is Our Calling
						</p>
					</div>
					<div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
						<h1 className="text-lg text-theme-blue pt-4 pb-2">Office</h1>
						<p className="text-lg text-gray-400 font-light">
							contact@yaksano.com
						</p>
						<p className="text-lg text-gray-400 font-light">
							30 N Gould St Ste N Sheridan, WY 82801
						</p>
					</div>
				</div>
				<div className="flex-col text-center mt-7">
					<p className="text-lg text-gray-400 font-light">
						Copyright
						{' '}
						{new Date().getFullYear()}
						{' '}- All rights reserved - Yaksano LLC
					</p>
				</div>
			</div>
		</div>
	);
}
