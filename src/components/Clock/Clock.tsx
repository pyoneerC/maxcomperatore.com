"use client"

import React, { useState, useEffect } from 'react';
import styles from './Clock.module.css';

// @ts-ignore
const Clock = ({ className }) => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const updateClock = () => {
			setTime(new Date());
		};

		const now = new Date();
		const delay = (60 - now.getSeconds()) * 1000;

		const timeoutId = setTimeout(() => {
			updateClock();

			const intervalId = setInterval(updateClock, 60000);
			return () => clearInterval(intervalId);
		}, delay);

		return () => clearTimeout(timeoutId);
	}, []);

	const formatTime = (date: Date) => {
		const options = {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false,
		};
		// @ts-ignore
		return date.toLocaleTimeString('es-AR', options);
	};

	const getLocalTime = (date: Date) => {
		const localTime = new Date(date.toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }));
		return formatTime(localTime);
	};

	return (
		<span className={`${styles.clock} ${className}`}>
			<svg style={{marginRight: '5px', fontSize: '15px'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
					 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
					 className="icon icon-tabler icons-tabler-outline icon-tabler-clock"><path stroke="none" d="M0 0h24v24H0z"
																																										 fill="none" /><path
				d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 7v5l3 3" /></svg>
			{getLocalTime(time)} (GMT-3)
        </span>
	);
};

export default Clock
