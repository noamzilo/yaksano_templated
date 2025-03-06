/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";

import { Fade } from "react-awesome-reveal";

import Button from "../elements/Button";

import WebsiteHero from "../assets/images/hero/WebsiteHero.jpg";

export default function Hero() {
	return (
		<section
			className="hero min-h-screen flex flex-col md:flex-row items-center justify-between overflow-hidden"
			style={{ scrollSnapAlign: "start" }} // Ensures it's "above the fold" if using snap
		>
			<div className="md:w-1/2 flex flex-col px-4 md:px-8 mb-8 md:mb-0">
				<h1 className="text-4xl sm:text-5xl text-theme-blue font-bold leading-tight mb-5">
					End-to-End Solutions <br />
					Powered by AI & Data
				</h1>
				<p className="font-light text-base sm:text-lg text-gray-400 leading-relaxed mb-10">
					Expert software engineering and AI consulting, specializing in computer vision,
					data pipelines, and enterprise-grade ML systems.
				</p>
				<Fade direction="up" delay={500} triggerOnce>
					<Button
						href="/projects"
						type="link"
						className="flex w-71 h-18 items-center px-14 py-5 text-white text-xl bg-theme-purple rounded-lg shadow-2xl hover:bg-dark-theme-purple transition duration-200"
					>
						See Our Work
						<svg
							className="ml-2 w-7 h-7 text-white animate-bounce-x"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</Button>
				</Fade>
			</div>
			<div className="md:w-1/2 flex justify-center items-center px-4 md:px-8">
				<Fade direction="up" triggerOnce>
					<img
						className="max-w-full h-auto object-contain"
						src={WebsiteHero}
						alt="Build Website"
					/>
				</Fade>
			</div>
		</section>
	);
}
