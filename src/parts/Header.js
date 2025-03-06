/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { useLocation } from 'react-router-dom';
import Button from '../elements/Button';
import BrandIcon from './BrandIcon';

export default function Header() {
	const [isCollapse, setIsCollapse] = useState(false);
	const location = useLocation();
	const path = location.pathname;

	return (
	  <header className="header px-4 lg:px-8 py-3 lg:py-4"> {/* Reduced padding */}
	    <div className="flex justify-between items-center">
	      <BrandIcon />

	      <button className="block text-theme-blue lg:hidden focus:outline-none" onClick={() => setIsCollapse(!isCollapse)}>
	        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	          <path className={`${isCollapse ? 'hidden' : 'block'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
	          <path className={`${!isCollapse ? 'hidden' : 'block'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
	        </svg>
	      </button>
	    </div>

	    <ul className="hidden lg:flex text-theme-blue tracking-widest items-center space-x-5">
	      <li>
	        <Button className={`${path === '/' ? 'active-link' : ''} font-medium text-lg`} type="link" href="/">Home</Button>
	      </li>
	      <li>
	        <Button className={`${path === '/team' ? 'active-link' : ''} font-medium text-lg`} type="link" href="/team">Team</Button>
	      </li>
	      <li>
	        <Button className={`${path === '/projects' ? 'active-link' : ''} font-medium text-lg`} type="link" href="/projects">Projects</Button>
	      </li>
	      <li>
	        <Button className="font-medium text-lg px-5 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple transition duration-200"
	          type="link" href="/discuss-project">
	          Discuss Project
	        </Button>
	      </li>
	    </ul>

	    <Transition show={isCollapse} enter="transition-opacity duration-400" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-400" leaveFrom="opacity-100" leaveTo="opacity-0">
	      <ul className="z-50 flex flex-col text-theme-blue tracking-widest my-6 absolute bg-white w-full border-b-2 border-gray-300 lg:hidden">
	        <li className="py-2">
	          <Button className={`${path === '/' ? 'active-link' : ''} font-medium px-10`} type="link" href="/">Home</Button>
	        </li>
	        <li className="py-2">
	          <Button className={`${path === '/team' ? 'active-link' : ''} font-medium px-10`} type="link" href="/team">Team</Button>
	        </li>
	        <li className="py-2">
	          <Button className={`${path === '/projects' ? 'active-link' : ''} font-medium px-10`} type="link" href="/projects">Projects</Button>
	        </li>
	        <li className="mx-auto my-9">
	          <Button className="font-bold px-5 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple transition duration-200"
	            type="link" href="/discuss-project">
	            Discuss Project
	          </Button>
	        </li>
	      </ul>
	    </Transition>
	  </header>
	);
}
