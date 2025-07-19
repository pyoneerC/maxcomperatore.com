"use client";

import { useEffect, useState, useTransition } from "react";

import { useTranslations } from "next-intl";

import { setUserLocale } from "~/services/locale";

import styles from "./LanguageSwitcher.module.css";

export const LanguageSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const [isPending, startTransition] = useTransition();
	const [locale, setLocale] = useState("es");
	const t = useTranslations("LanguageSwitcher");

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!mounted) return;
		const params = new URLSearchParams(window.location.search);
		const lang = params.get("lang");
		const valid = lang === "en" || lang === "es" ? lang : "en";
		setLocale(valid);
		setUserLocale(valid);
	}, [mounted]);

	const handleOnClick = () => {
		startTransition(() => {
			const newLocale = locale === "es" ? "en" : "es";
			setUserLocale(newLocale).then(() => setLocale(newLocale));
		});
	};

	if (!mounted) return null;
	
	return (
		<button
			className={styles.button}
			onClick={handleOnClick}
			title={t("switchLanguage")}
			aria-live="polite"
			disabled={isPending}
		>
			<img
				className={styles.flag}
				aria-hidden="true"
				src={locale === "es" ? "/assets/flags/spain.avif" : "/assets/flags/uk.avif"}
				alt={`Switch to ${locale === "en" ? "English" : "Spanish"}`}
				height={24}
				width={24}
			/>
		</button>
	);
};

export default LanguageSwitcher;
