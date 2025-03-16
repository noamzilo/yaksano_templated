/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */

import React, { Component } from 'react';

import Button from 'elements/Button';

import NotFound from 'assets/images/NotFound.png';
import styles from './NotFoundPage.module.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class NotFoundPage extends Component {
	render() {
		return (
			<div className={styles.container}>
				<div className={styles.imageWrapper}>
					<img src={NotFound} alt="Not Found" className={styles.image} />
				</div>
				<h1 className={styles.title}>
					You weren't supposed to find this place...
				</h1>
				<div className={styles.buttonWrapper}>
					<Button 
						href="/" 
						type="link" 
						className={styles.button}
					>
						Go Back
					</Button>
				</div>
			</div>
		);
	}
}
