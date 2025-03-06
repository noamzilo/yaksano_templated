/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { useLocation } from 'react-router-dom';

import Button from '../elements/Button';
import BrandIcon from './BrandIcon';

export default function Header() {
	const [isCollapse, setIsCollapse] = useState(false);
	const location = useLocation();
	const path = location.pathname;

	return (
	  <header className="header py-3 px-4 lg:px-8"> {/* Reduced padding */}
	    <div className="flex justify-between">
	      <BrandIcon />

	      <button className="block text-theme-blue lg:hidden focus:outline-none" onClick={() => setIsCollapse(!isCollapse)}>
	        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	          <path className={`${isCollapse ? 'hidden' : 'block'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
	          <path className={`${!isCollapse ? 'hidden' : 'block'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
	        </svg>
	      </button>
	    </div>

	    <ul className="hidden text-theme-blue tracking-widest items-center lg:flex flex-row">
	      <li>
	        <Button className={`${path === '/' ? 'active-link' : ''} font-medium text-lg px-4`} type="link" href="/">Home</Button>
	      </li>
	      <li>
	        <Button className={`${path === '/team' ? 'active-link' : ''} font-medium text-lg px-4`} type="link" href="/team">Team</Button>
	      </li>
	      <li>
	        <Button className={`${path === '/projects' ? 'active-link' : ''} font-medium text-lg px-4`} type="link" href="/projects">Projects</Button>
	      </li>
	      <li>
	        <Button className="font-medium text-lg px-6 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple transition duration-200"
	          type="link" href="/discuss-project">
	          Discuss Project
	        </Button>
	      </li>
	    </ul>
	  </header>
	);
}
