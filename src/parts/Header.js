import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../elements/Button';
import BrandIcon from './BrandIcon';
import styles from './Header.module.css';

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();
	const currentPath = location.pathname;

	return (
		<header className={styles.header}>
			<div className={styles.headerContainer}>
				<BrandIcon />

				{/* Hamburger button (mobile only) */}
				<button
					className={styles.menuButton}
					onClick={() => setIsOpen(!isOpen)}
					aria-label="Toggle menu"
				>
					<svg
						className={styles.menuIcon}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						{isOpen ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16m-7 6h7"
							/>
						)}
					</svg>
				</button>
			</div>

			{/* MOBILE OVERLAY MENU */}
			<nav className={`${styles.mobileMenu} ${isOpen ? styles.show : ''}`}>
				<button
					className={styles.closeButton}
					onClick={() => setIsOpen(false)}
					aria-label="Close menu"
				>
					&times;
				</button>
				<ul className={styles.mobileMenuList}>
					<li>
						<Button
							className={currentPath === '/' ? styles.activeNavItem : styles.navItem}
							type="link"
							href="/"
							onClick={() => setIsOpen(false)}
						>
							Home
						</Button>
					</li>
					<li>
						<Button
							className={currentPath === '/team' ? styles.activeNavItem : styles.navItem}
							type="link"
							href="/team"
							onClick={() => setIsOpen(false)}
						>
							Team
						</Button>
					</li>
					<li>
						<Button
							className={currentPath === '/projects' ? styles.activeNavItem : styles.navItem}
							type="link"
							href="/projects"
							onClick={() => setIsOpen(false)}
						>
							Projects
						</Button>
					</li>
					<li>
						<Button
							className={styles.ctaButton}
							type="link"
							href="/discuss-project"
							onClick={() => setIsOpen(false)}
						>
							Discuss Project
						</Button>
					</li>
				</ul>
			</nav>

			{/* DESKTOP NAV (HORIZONTAL) */}
			<nav className={styles.navList}>
				<ul>
					<li>
						<Button
							className={currentPath === '/' ? styles.activeNavItem : styles.navItem}
							type="link"
							href="/"
						>
							Home
						</Button>
					</li>
					<li>
						<Button
							className={currentPath === '/team' ? styles.activeNavItem : styles.navItem}
							type="link"
							href="/team"
						>
							Team
						</Button>
					</li>
					<li>
						<Button
							className={currentPath === '/projects' ? styles.activeNavItem : styles.navItem}
							type="link"
							href="/projects"
						>
							Projects
						</Button>
					</li>
					<li>
						<Button
							className={styles.ctaButton}
							type="link"
							href="/discuss-project"
						>
							Discuss Project
						</Button>
					</li>
				</ul>
			</nav>
		</header>
	);
}
