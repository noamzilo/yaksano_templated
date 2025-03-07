/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */

import React from 'react';
import { Fade } from 'react-awesome-reveal';

import Button from '../elements/Button';
import styles from './Portfolio.module.css';

export default function Portfolio({ data }) {
	return (
		<section className={styles.container}>
			<Fade direction="right" triggerOnce>
				<h1 className={styles.heading}>Featured Projects</h1>
			</Fade>
			<Fade direction="left" triggerOnce>
				<p className={styles.subheading}>
					Case studies and projects we&apos;ve worked on.
				</p>
			</Fade>

			<div className={styles.grid}>
				{data.map((item, index) => (
					<Fade
						direction="up"
						triggerOnce
						bottom
						delay={500 * index}
						// eslint-disable-next-line react/no-array-index-key
						key={index}
					>
						<Button type="link" href={`/projects/${item.id}`}>
							<div className={styles.card}>
								<div className={styles.imageContainer}>
									<img
										src={item.imageUrl}
										alt="Portfolio"
										className={styles.portfolioImage}
									/>
									<div className={styles.overlay}>
										<button className={styles.viewButton}>
											<svg
												className={styles.viewIcon}
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
												/>
											</svg>
										</button>
									</div>
								</div>

								<div className={styles.cardContent}>
									<h2 className={styles.title}>{item.title}</h2>
									<p className={styles.subtitle}>{item.type}</p>
								</div>
							</div>
						</Button>
					</Fade>
				))}
			</div>
		</section>
	);
}
