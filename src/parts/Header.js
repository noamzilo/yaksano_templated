/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Button from '../elements/Button';
import BrandIcon from './BrandIcon';
import styles from './Header.module.css';

export default function Header() {
	const [isCollapse, setIsCollapse] = useState(false);
	const location = useLocation();
	const path = location.pathname;

	return (
		<header className={styles.header}>
			<div className={styles.headerContainer}>
				<BrandIcon />

				<button
					className={styles.menuButton}
					onClick={() => setIsCollapse(!isCollapse)}
				>
					<svg
						className={styles.menuIcon}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							className={isCollapse ? 'hidden' : 'block'}
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16m-7 6h7"
						/>
						<path
							className={!isCollapse ? 'hidden' : 'block'}
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>

			<ul className={styles.navList}>
				<li>
					<Button
						className={path === '/' ? styles.activeNavItem : styles.navItem}
						type="link"
						href="/"
					>
						Home
					</Button>
				</li>
				<li>
					<Button
						className={path === '/team' ? styles.activeNavItem : styles.navItem}
						type="link"
						href="/team"
					>
						Team
					</Button>
				</li>
				<li>
					<Button
						className={path === '/projects' ? styles.activeNavItem : styles.navItem}
						type="link"
						href="/projects"
					>
						Projects
					</Button>
				</li>
				<li>
				<Button className="font-medium text-lg px-6 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple transition duration-200"
					type="link" href="/discuss-project">
					Discuss Project
				</Button>
				</li>
			</ul>

			{isCollapse && (
				<div className={styles.mobileMenu}>
					<ul>
						<li className="py-2">
							<Button
								className={path === '/' ? styles.activeNavItem : styles.navItem}
								type="link"
								href="/"
							>
								Home
							</Button>
						</li>
						<li className="py-2">
							<Button
								className={path === '/team' ? styles.activeNavItem : styles.navItem}
								type="link"
								href="/team"
							>
								Team
							</Button>
						</li>
						<li className="py-2">
							<Button
								className={path === '/projects' ? styles.activeNavItem : styles.navItem}
								type="link"
								href="/projects"
							>
								Projects
							</Button>
						</li>
						<li className="py-2">
							<Button
								className={styles.ctaButton}
								type="link"
								href="/discuss-project"
							>
								Discuss Project
							</Button>
						</li>
					</ul>
				</div>
			)}
		</header>
	);
}
