/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";
import { Fade } from "react-awesome-reveal";

import Button from "../elements/Button";
import WebsiteHero from "../assets/images/hero/WebsiteHero.jpg";

import styles from "./Hero.module.css";

export default function Hero() {
	return (
		<section
			className={styles.hero}
			style={{ scrollSnapAlign: "start", marginBottom: "1em" }}
		>
			<div className={styles.heroLeft}>
				<h1 className={styles.heroTitle}>
					End-to-End Solutions <br />
					Powered by AI & Data
				</h1>
				<p className={styles.heroDescription}>
					Expert software engineering and AI consulting, specializing in computer vision,
					data pipelines, and enterprise-grade ML systems.
				</p>
				<Fade direction="up" delay={500} triggerOnce>
					<Button
						href="/projects"
						type="link"
						className={styles.heroButton}
					>
						See Our Work
						<svg
							className={`${styles.heroButtonIcon} ${styles.animateBounceX}`}
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
			<div className={styles.heroRight}>
				<Fade direction="up" triggerOnce>
					<img
						className={styles.heroImage}
						src={WebsiteHero}
						alt="Build Website"
						style={{ borderRadius: "20px" }}
					/>
				</Fade>
			</div>
		</section>
	);
}
