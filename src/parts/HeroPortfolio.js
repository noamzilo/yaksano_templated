/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { Fade } from 'react-awesome-reveal';

import heroPortfolio from 'assets/images/hero/PortfolioHero.jpg';

export default function HeroPortfolio() {
	return (
	  <section className="hero sm:items-center lg:items-start sm:flex-row">
	    <div className="w-full sm:w-1/2 flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
	      <Fade direction="up" triggerOnce>
	        <h1 className="text-6xl text-theme-blue font-bold leading-tight mb-5">Portfolio</h1>
	      </Fade>
	      <Fade direction="up" triggerOnce delay={400}>
	        <p className="font-light text-xl text-gray-400 leading-relaxed">
				As a technology-focused software company, we specialize in developing AI-driven solutions, backend systems, and data-centric applications. With expertise in machine learning, deep learning, and computer vision, we design and optimize intelligent systems that enhance business operations. Our clients trust us to deliver scalable, high-performance software solutions that leverage cutting-edge AI and data engineering techniques.
			</p>
	      </Fade>
	    </div>
	    <div className="w-full sm:w-1/2 sm:pr-12">
	      <Fade direction="up" triggerOnce>
	        <img src={heroPortfolio} alt="Hero" style={{borderRadius: '20px'}} />
	      </Fade>
	    </div>
	  </section>
	);
}
