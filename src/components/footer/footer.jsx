import React from 'react';
import styles from './footer.module.css';

const Footer = () => (
	<footer className={styles.footer}>
		<p className={styles.title}>
			&copy; {new Date().getFullYear()} Grace Jeong. All rights reserved.{' '}
		</p>
	</footer>
);

export default Footer;
