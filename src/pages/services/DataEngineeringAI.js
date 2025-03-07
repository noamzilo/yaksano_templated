import React from 'react';
import styles from './DataEngineeringAI.module.css';

import AIImg from 'assets/images/Services/AI2.jpg'; // same image you used in data

export default function DataEngineeringAI() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Data Engineering &amp; AI</h1>
			<img
				src={AIImg}
				alt="Data Engineering & AI"
				className={styles.image}
			/>
			<p className={styles.description}>
				We specialize in building scalable data pipelines, AI-driven automation,
				and optimized machine learning workflows. Our expertise covers everything
				from data warehousing to real-time analytics.
			</p>
		</div>
	);
}
