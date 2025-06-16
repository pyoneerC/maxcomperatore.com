"use client"

import React, { useState, useEffect } from 'react'
import styles from './ScrollToTopButton.module.css'

const ScrollToTopButton: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false)

	const toggleVisibility = () => {
		if (window.scrollY > 300) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility)
		return () => {
			window.removeEventListener('scroll', toggleVisibility)
		}
	}, [])

	return (
		<div className={`${styles.scrollToTop} ${isVisible ? styles.show : ''}`} onClick={scrollToTop}>
			<svg className='bee bee-icons' width='24' height='24' viewBox='0 0 24 24' fill='none'
					 xmlns='http://www.w3.org/2000/svg'>
				<rect width='24' height='24' fill='none' />
				<path
					d='M11.2191 7.97609C11.6195 7.47568 12.3805 7.47568 12.7809 7.97609L18.7002 15.3753C19.2241 16.0301 18.7579 17 17.9194 17H6.08062C5.24212 17 4.77595 16.0301 5.29976 15.3753L11.2191 7.97609Z'
					stroke='currentColor' strokeWidth='2' />
			</svg>
		</div>
	)
}

export default ScrollToTopButton
