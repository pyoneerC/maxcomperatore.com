"use client"

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import type { CoverProject } from '~/types';
import styles from './ProjectCard.module.css';

interface Props extends CoverProject {}

export const ProjectCard: React.FC<Props> = ({ slug, imageUrl, name, description }) => {
	const href = `/project/${slug}`;
	const cardRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: 0.5 });

		if (cardRef.current) {
			observer.observe(cardRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<article
			ref={cardRef}
			className={`${styles.card} ${isVisible ? styles.cardVisible : styles.cardInitial}`}
		>
			<Link href={href} legacyBehavior>
				<a className={styles.link}>{name}</a>
			</Link>
			<figure className={styles.imageWrapper}>
				<img
					className={styles.image}
					src={imageUrl}
					alt={name}
					width={684}
					height={385}
					loading="lazy"
				/>
			</figure>
			<h3 className={styles.title}>{name}</h3>
			<p>{description}</p>
		</article>
	);
}
