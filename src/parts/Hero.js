import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Button from '../elements/Button';
import WebsiteHero from '../assets/images/hero/WebsiteHero.jpg';

export default function Hero() {
	return (
	  <section className="hero container mx-auto flex flex-col lg:flex-row items-center justify-between h-[85vh] px-4 lg:px-8">
	    <div className="hero-content w-full lg:w-1/2 text-center lg:text-left">
	      <h1 className="text-4xl sm:text-5xl lg:text-5xl text-theme-blue font-bold leading-tight mb-4">
	        End-to-End Solutions <br />
	        Powered by AI & Data
	      </h1>
	      <p className="font-light text-lg sm:text-xl text-gray-400 leading-relaxed mb-6">
	        Expert software engineering and AI consulting, specializing in computer vision, data pipelines, and enterprise-grade ML systems.
	      </p>
	      <Fade direction="up" delay={500} triggerOnce>
	        <Button
	          href="/projects"
	          className="flex justify-center items-center w-48 h-14 px-5 py-3 text-white text-lg bg-theme-purple rounded-lg shadow-xl hover:bg-dark-theme-purple transition duration-200"
	        >
	          See Our Work
	        </Button>
	      </Fade>
	    </div>

	    <div className="lg:w-1/2 flex justify-center items-center">
	      <Fade direction="up" triggerOnce>
	        <img className="rounded-xl max-h-[60vh] object-contain" src={WebsiteHero} alt="Build Website" />
	      </Fade>
	    </div>
	  </section>
	);
}
