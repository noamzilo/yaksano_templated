/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import styles from './Service.module.css';

export default function Service({ data }) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<Fade direction="right" triggerOnce>
					<h1 className={styles.title}>Our Services</h1>
				</Fade>
				<Fade direction="left" triggerOnce>
					<p className={styles.subtitle}>
						We are ready to scale up your business with our great service.
					</p>
				</Fade>

				<div className={styles.grid}>
					{data.map((item, index) => (
						<Fade direction={item.animation} delay={500 * index} key={index} triggerOnce>
							<Link
								to={`/services/${item.title.replace(/\s+/g, '-').toLowerCase()}`}
								className={styles.cardLink}
							>
								<div className={styles.card}>
									<img
										src={item.imageUrl}
										alt={item.title}
										className={styles.cardImage}
									/>
									<h2 className={styles.cardTitle}>
										{item.title}
									</h2>
								</div>
							</Link>
						</Fade>
					))}
				</div>
			</div>
		</div>
	);
}
