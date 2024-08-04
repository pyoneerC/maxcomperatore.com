"use client";

import React, { useState, useEffect } from 'react';
import styles from './ScrollToTopButton.module.css';

const ScrollToTopButton: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.scrollY > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);
		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);

	return (
		<div className={`${styles.scrollToTop} ${isVisible ? styles.show : ''}`} onClick={scrollToTop}>
			↑
		</div>
	);
};

export default ScrollToTopButton;
