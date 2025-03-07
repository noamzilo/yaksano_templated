/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */

import React from 'react';
import Fade from 'react-awesome-reveal';
import styles from './Advantage.module.css';

export default function Advantage({ data }) {
	return (
		<div className={styles.section}>
			<div className={styles.container}>
				<Fade bottom triggerOnce>
					<h1 className={styles.title}>Why Choose Us</h1>
					<p className={styles.subtitle}>Why you should choose us to handle your project.</p>
				</Fade>

				<div className={styles.flexContainer}>
					<div className={styles.cardContainer}>
						{data.map((item, index) => (
							<Fade bottom triggerOnce delay={5 * index} key={index}>
								<div className={styles.card}>
									<img src={item.imageUrl} alt="" className={styles.image} />
									<div className={styles.textContainer}>
										<h2 className={styles.cardTitle}>{item.title}</h2>
										<p className={styles.cardDescription}>{item.description}</p>
									</div>
								</div>
							</Fade>
						))}
					</div>

				
				</div>
			</div>
		</div>
	);
}
