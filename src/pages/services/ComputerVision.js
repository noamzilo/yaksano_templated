import React from 'react';
import styles from './ComputerVision.module.css';

import CVImg from 'assets/images/Services/CV6.jpg'; // same image from data

export default function ComputerVision() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Computer Vision</h1>
			<img
				src={CVImg}
				alt="Computer Vision"
				className={styles.image}
			/>
			<p className={styles.description}>
				Our Computer Vision solutions harness advanced algorithms for object detection,
				face recognition, and image segmentation. From real-time video analytics to
				embedded vision, we've got you covered.
			</p>
		</div>
	);
}
