import React from 'react';
import PropTypes from 'prop-types';
import Header from 'parts/Header';
import Footer from 'parts/Footer';
import styles from './Layout.module.css';

export const Layout = ({ children }) => {
	return (
		<div className={styles.container}>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}; 
