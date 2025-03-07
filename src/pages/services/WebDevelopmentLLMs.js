import React from 'react';
import styles from './WebDevelopmentLLMs.module.css';

import WebImg from 'assets/images/Services/WEB2.jpg'; // same image from data

export default function WebDevelopmentLLMs() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Web Development &amp; LLMs</h1>
			<img
				src={WebImg}
				alt="Web Development & LLMs"
				className={styles.image}
			/>
			<p className={styles.description}>
				We build modern web applications and integrate large language models for
				conversational interfaces, text generation, and more. Boost user engagement
				and productivity with intelligent chatbot experiences.
			</p>
		</div>
	);
}
