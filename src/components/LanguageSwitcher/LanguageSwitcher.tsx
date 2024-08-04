"use client";

import { useState, useEffect } from "react";
import styles from "./LanguageSwitcher.module.css";

export const LanguageSwitcher = () => {
	const [isSpanish, setIsSpanish] = useState(true);

	useEffect(() => {
		const savedLanguage = localStorage.getItem("language");
		if (savedLanguage) {
			setIsSpanish(savedLanguage === "es");
		}
	}, []);

	const handleOnClick = () => {
		const newLanguage = isSpanish ? "en" : "es";
		setIsSpanish(!isSpanish);
		localStorage.setItem("language", newLanguage);

		document.documentElement.lang = newLanguage;
	};

	return (
		<button
			className={styles.button}
			onClick={handleOnClick}
			title={isSpanish ? "Cambiar a inglés" : "Switch to Spanish"}
			aria-live="polite"
		>
			<img
				className={styles.flag}
				aria-hidden="true"
				src={isSpanish ? "/assets/icons/spain.avif" : "/assets/icons/uk.avif"}
				alt={`Switch to ${isSpanish ? "English" : "Spanish"}`}
				height={24}
				width={24}
			/>
		</button>
	);
};

export default LanguageSwitcher;
