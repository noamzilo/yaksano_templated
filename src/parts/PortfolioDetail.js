/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import Fade from 'react-awesome-reveal';
import NotFound from 'assets/images/NotFound.png';
import Button from 'elements/Button';
import { Portfolios } from 'json/landingPageData';
import styles from './PortfolioDetail.module.css';

export default function PortfolioDetail({ data }) {
	if (data === null) {
		return (
			<section className={styles.container}>
				<Fade bottom triggerOnce>
					<div className={styles.notFoundWrapper}>
						<div className={styles.imageWrapper}>
							<img src={NotFound} alt="Not Found" className={styles.notFoundImage} />
						</div>
						<h1 className={styles.notFoundTitle}>
							Project Not Found
						</h1>
						<div className={styles.buttonWrapper}>
							<Button href="/projects" type="link" className={styles.backButton}>
								Go Back
							</Button>
						</div>
					</div>
				</Fade>
			</section>
		);
	}

	return (
		<section className={styles.container}>
			<Fade bottom>
				<Button type="link" href="/projects" className={styles.allProjectsLink}>
					<svg className={styles.backIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
					</svg>
					See All Projects
				</Button>
			</Fade>

			{data.map((item) => {
				const portfolioItem = Portfolios.find(p => p.id === item.id);
				return (
					<div className={styles.projectWrapper} key={item.id}>
						<Fade bottom triggerOnce>
							<h1 className={styles.projectTitle}>{portfolioItem.title}</h1>
							<p className={styles.projectType}>
								{portfolioItem.type} {portfolioItem.credit && `| ${portfolioItem.credit}`}
							</p>
						</Fade>

						<Fade bottom delay={300} triggerOnce>
							<div className={styles.imageWrapper}>
								<img src={portfolioItem.imageUrl} alt="Project" className={styles.projectImage} />
							</div>
						</Fade>

						<Fade bottom delay={300} triggerOnce>
							<div className={styles.detailsSection}>
								<h1 className={styles.sectionTitle}>
									Project Details
								</h1>
								<p className={styles.description}>
									{portfolioItem.description || "Project description coming soon."}
								</p>
							</div>

							<div className={styles.showcaseSection}>
								<h1 className={styles.sectionTitle}>
									Project Showcases
								</h1>
								<div className={styles.tagContainer}>
									{portfolioItem.responsibility.map((responsibility, idx) => (
										<div key={idx} className={styles.tag}>
											{responsibility}
										</div>
									))}
								</div>
							</div>
						</Fade>
					</div>
				);
			})}
		</section>
	);
}
